import json
import joblib
import numpy as np
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="PoliGizi ML Inference Service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MODEL_DIR = Path(__file__).parent / "models"

# Load semua model & preprocessor saat server menyala
best_model = joblib.load(MODEL_DIR / "model_gizi_terbaik.pkl")
scaler = joblib.load(MODEL_DIR / "scaler.pkl")
le_target = joblib.load(MODEL_DIR / "label_encoder_target.pkl")

all_models = {
    "Decision Tree": joblib.load(MODEL_DIR / "model_decision_tree.pkl"),
    "Random Forest": joblib.load(MODEL_DIR / "model_random_forest.pkl"),
    "K-Nearest Neighbors": joblib.load(MODEL_DIR / "model_knn.pkl"),
    "Support Vector Machine": joblib.load(MODEL_DIR / "model_svm.pkl"),
}

with open(MODEL_DIR / "metrics_summary.json", "r") as f:
    metrics_summary = json.load(f)


class BalitaInput(BaseModel):
    umur_bulan: int = Field(..., ge=0, le=60)
    jenis_kelamin: str = Field(..., pattern="^(L|P|l|p)$")
    bb_kg: float = Field(..., gt=0, le=50)
    tb_cm: float = Field(..., gt=20, le=150)


def prepare_features(data: BalitaInput):
    # Urutan fitur HARUS SAMA dengan Cell 3 Colab: ['umur_bulan', 'bb', 'tb', 'jk_encoded']
    jk_encoded = 0 if data.jenis_kelamin.upper() == "L" else 1
    X_raw = np.array([[data.umur_bulan, data.bb_kg, data.tb_cm, jk_encoded]], dtype=float)
    X_scaled = scaler.transform(X_raw)
    return X_raw, X_scaled


def hitung_zscore_permenkes(data: BalitaInput):
    usia, bb, tb = data.umur_bulan, data.bb_kg, data.tb_cm
    jk = data.jenis_kelamin.upper()
    if jk == "L":
        tb_med = 50.0 + (usia * 0.92) - (0.003 * (usia ** 2))
        tb_sd = 2.2 + (usia * 0.025)
        bb_med = 3.3 + (usia * 0.29) - (0.0015 * (usia ** 2))
        bb_sd = 0.5 + (usia * 0.045)
    else:
        tb_med = 49.1 + (usia * 0.90) - (0.003 * (usia ** 2))
        tb_sd = 2.1 + (usia * 0.025)
        bb_med = 3.2 + (usia * 0.27) - (0.0014 * (usia ** 2))
        bb_sd = 0.45 + (usia * 0.045)

    z_tbu = round((tb - tb_med) / tb_sd, 2)
    z_bbu = round((bb - bb_med) / bb_sd, 2)
    rasio_bb_tb = round(bb / tb, 4)
    return {"zscore_tbu": z_tbu, "zscore_bbu": z_bbu, "rasio_bb_tb": rasio_bb_tb}


@app.get("/health")
def health_check():
    return {"status": "ok", "models_loaded": list(all_models.keys())}


@app.get("/metrics")
def get_metrics():
    return {"status": "success", "metrics": metrics_summary}


@app.post("/predict")
def predict_best(data: BalitaInput):
    try:
        X_raw, _ = prepare_features(data)
        pred_idx = best_model.predict(X_raw)[0]
        label = str(le_target.inverse_transform([pred_idx])[0])

        confidence = None
        if hasattr(best_model, "predict_proba"):
            proba = best_model.predict_proba(X_raw)[0]
            confidence = round(float(np.max(proba)) * 100, 2)

        zscores = hitung_zscore_permenkes(data)
        return {
            "status": "success",
            "status_gizi_ml": label,
            "confidence_percent": confidence,
            "zscore_bbu": zscores["zscore_bbu"],
            "zscore_tbu": zscores["zscore_tbu"],
            "zscore_bbtb": zscores["rasio_bb_tb"],
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/simulate")
def simulate_all_models(data: BalitaInput):
    try:
        X_raw, X_scaled = prepare_features(data)
        zscores = hitung_zscore_permenkes(data)
        predictions = []

        for name, model in all_models.items():
            X_in = X_scaled if name in ["K-Nearest Neighbors", "Support Vector Machine"] else X_raw
            pred_idx = model.predict(X_in)[0]
            label = str(le_target.inverse_transform([pred_idx])[0])

            confidence = None
            probabilities = {}
            if hasattr(model, "predict_proba"):
                proba = model.predict_proba(X_in)[0]
                confidence = round(float(np.max(proba)) * 100, 2)
                probabilities = {
                    str(cls): round(float(p) * 100, 2)
                    for cls, p in zip(le_target.classes_, proba)
                }

            predictions.append({
                "model": name,
                "prediksi_status_gizi": label,
                "confidence_percent": confidence,
                "probabilities": probabilities,
            })

        return {
            "status": "success",
            "input": data.model_dump(),
            "zscores": zscores,
            "comparisons": predictions,
            "benchmark_metrics": metrics_summary,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))