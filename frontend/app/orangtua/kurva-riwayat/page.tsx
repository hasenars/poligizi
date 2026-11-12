"use client";

import { useState } from "react";
import {
  Baby,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Info,
  Ruler,
  Scale,
  Sparkles,
} from "lucide-react";
import SidebarOrangTua from "@/components/SidebarOrangTua";
import type { Balita, CatatanPenimbangan, StatusGizi, User } from "@/types";

interface ChildGrowthData {
  balita: Balita;
  usiaLabel: string;
  jenisKelaminLabel: string;
  measurements: CatatanPenimbangan[];
  dates: Record<string, string>;
  recommendations: Record<string, string>;
}

interface IndicatorOption {
  id: IndicatorId;
  label: string;
  shortLabel: string;
  zScoreKey: "zscoreBbu" | "zscoreTbu" | "zscoreBbtb";
  valueKey: "bb" | "tb";
  unit: "kg" | "cm";
  icon: typeof Scale;
}

type IndicatorId = "bbu" | "tbu" | "bbtb";

const parent: User = {
  id: "ortu-001",
  nama: "Ibu Siti Aminah",
  email: "siti.aminah@example.com",
  role: "orangtua",
  posyandu: "Posyandu Melati 02",
};

const children: ChildGrowthData[] = [
  {
    balita: {
      id: "balita-001",
      nik: "3374011503250001",
      nama: "Arka Pratama",
      jenisKelamin: "L",
      tglLahir: "2025-05-13",
      namaOrangTua: parent.nama,
      posyandu: "Posyandu Melati 02",
      bbTerakhir: 10.8,
      tbTerakhir: 79.5,
      statusGiziTerakhir: "normal",
    },
    usiaLabel: "18 Bulan",
    jenisKelaminLabel: "Laki-laki",
    measurements: [
      {
        id: "arka-01",
        balitaId: "balita-001",
        tglTimbang: "2026-06-07",
        umurBulan: 13,
        bb: 9.1,
        tb: 74.2,
        lk: 46,
        lila: 14.2,
        zscoreBbu: -0.5,
        zscoreTbu: -0.7,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan baik. Lanjutkan ASI dan MPASI beragam.",
      },
      {
        id: "arka-02",
        balitaId: "balita-001",
        tglTimbang: "2026-07-07",
        umurBulan: 14,
        bb: 9.4,
        tb: 75.1,
        lk: 46.2,
        lila: 14.4,
        zscoreBbu: -0.4,
        zscoreTbu: -0.6,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Berat dan panjang badan bertambah. Pertahankan jadwal makan.",
      },
      {
        id: "arka-03",
        balitaId: "balita-001",
        tglTimbang: "2026-08-07",
        umurBulan: 15,
        bb: 9.7,
        tb: 76,
        lk: 46.4,
        lila: 14.5,
        zscoreBbu: -0.3,
        zscoreTbu: -0.5,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Tawarkan lauk sumber protein hewani setiap hari.",
      },
      {
        id: "arka-04",
        balitaId: "balita-001",
        tglTimbang: "2026-09-07",
        umurBulan: 16,
        bb: 10,
        tb: 77.2,
        lk: 46.6,
        lila: 14.7,
        zscoreBbu: -0.2,
        zscoreTbu: -0.4,
        zscoreBbtb: 0,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan sesuai kurva. Berikan variasi sayur dan buah.",
      },
      {
        id: "arka-05",
        balitaId: "balita-001",
        tglTimbang: "2026-10-07",
        umurBulan: 17,
        bb: 10.4,
        tb: 78.3,
        lk: 46.8,
        lila: 14.9,
        zscoreBbu: -0.2,
        zscoreTbu: -0.3,
        zscoreBbtb: 0,
        statusGizi: "normal",
        catatanKader: "Pertahankan menu seimbang dan stimulasi bermain aktif.",
      },
      {
        id: "arka-06",
        balitaId: "balita-001",
        tglTimbang: "2026-11-07",
        umurBulan: 18,
        bb: 10.8,
        tb: 79.5,
        lk: 47,
        lila: 15,
        zscoreBbu: -0.2,
        zscoreTbu: -0.3,
        zscoreBbtb: 0.1,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan sesuai kurva. Lanjutkan pola makan beragam.",
      },
    ],
    dates: {
      "arka-01": "7 Juni 2026",
      "arka-02": "7 Juli 2026",
      "arka-03": "7 Agustus 2026",
      "arka-04": "7 September 2026",
      "arka-05": "7 Oktober 2026",
      "arka-06": "7 November 2026",
    },
    recommendations: {
      "arka-01":
        "Teruskan ASI hingga usia 2 tahun dan berikan MPASI dengan tekstur sesuai usia serta sumber protein hewani.",
      "arka-02":
        "Pertahankan jadwal makan utama dan selingan. Ajak anak aktif bergerak dan bermain.",
      "arka-03":
        "Tambahkan telur, ikan, ayam, atau sumber protein lain ke menu harian secara bergantian.",
      "arka-04":
        "Sajikan sayur dan buah beragam setiap hari, tanpa menggantikan makanan sumber energi dan protein.",
      "arka-05":
        "Teruskan pola makan beragam dan stimulasi bermain aktif. Pantau kembali bulan depan.",
      "arka-06":
        "Status gizi dalam rentang normal. Lanjutkan pola makan beragam dan datang ke Posyandu bulan depan.",
    },
  },
  {
    balita: {
      id: "balita-002",
      nik: "3374012201240002",
      nama: "Naya Putri",
      jenisKelamin: "P",
      tglLahir: "2024-01-22",
      namaOrangTua: parent.nama,
      posyandu: "Posyandu Melati 02",
      bbTerakhir: 12.1,
      tbTerakhir: 88,
      statusGiziTerakhir: "normal",
    },
    usiaLabel: "34 Bulan",
    jenisKelaminLabel: "Perempuan",
    measurements: [
      {
        id: "naya-01",
        balitaId: "balita-002",
        tglTimbang: "2026-06-07",
        umurBulan: 29,
        bb: 11.3,
        tb: 85,
        lk: 47.4,
        lila: 15.1,
        zscoreBbu: -0.5,
        zscoreTbu: -0.6,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan baik. Terus ajak anak mencoba makanan beragam.",
      },
      {
        id: "naya-02",
        balitaId: "balita-002",
        tglTimbang: "2026-07-07",
        umurBulan: 30,
        bb: 11.5,
        tb: 85.6,
        lk: 47.5,
        lila: 15.2,
        zscoreBbu: -0.5,
        zscoreTbu: -0.6,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Pertahankan jadwal makan dan kebiasaan cuci tangan.",
      },
      {
        id: "naya-03",
        balitaId: "balita-002",
        tglTimbang: "2026-08-07",
        umurBulan: 31,
        bb: 11.7,
        tb: 86.2,
        lk: 47.6,
        lila: 15.3,
        zscoreBbu: -0.5,
        zscoreTbu: -0.6,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Ajak anak aktif bermain dan tetap dampingi saat makan.",
      },
      {
        id: "naya-04",
        balitaId: "balita-002",
        tglTimbang: "2026-09-07",
        umurBulan: 32,
        bb: 11.8,
        tb: 86.8,
        lk: 47.7,
        lila: 15.3,
        zscoreBbu: -0.5,
        zscoreTbu: -0.5,
        zscoreBbtb: -0.1,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan tetap terpantau. Berikan lauk berprotein setiap hari.",
      },
      {
        id: "naya-05",
        balitaId: "balita-002",
        tglTimbang: "2026-10-07",
        umurBulan: 33,
        bb: 12,
        tb: 87.4,
        lk: 47.9,
        lila: 15.4,
        zscoreBbu: -0.4,
        zscoreTbu: -0.5,
        zscoreBbtb: 0,
        statusGizi: "normal",
        catatanKader: "Pertumbuhan baik. Jaga variasi makanan dan waktu istirahat.",
      },
      {
        id: "naya-06",
        balitaId: "balita-002",
        tglTimbang: "2026-11-07",
        umurBulan: 34,
        bb: 12.1,
        tb: 88,
        lk: 48,
        lila: 15.5,
        zscoreBbu: -0.4,
        zscoreTbu: -0.5,
        zscoreBbtb: 0,
        statusGizi: "normal",
        catatanKader: "Naya tumbuh dengan baik. Terus stimulasi aktif dan bermain bersama.",
      },
    ],
    dates: {
      "naya-01": "7 Juni 2026",
      "naya-02": "7 Juli 2026",
      "naya-03": "7 Agustus 2026",
      "naya-04": "7 September 2026",
      "naya-05": "7 Oktober 2026",
      "naya-06": "7 November 2026",
    },
    recommendations: {
      "naya-01":
        "Pertahankan jadwal makan keluarga yang teratur dengan lauk berprotein, sayur, dan buah.",
      "naya-02":
        "Terus biasakan cuci tangan sebelum makan dan dampingi anak saat mencoba menu baru.",
      "naya-03":
        "Ajak anak bermain aktif setiap hari dan berikan kesempatan makan mandiri dengan pengawasan.",
      "naya-04":
        "Sediakan lauk sumber protein hewani setiap hari untuk mendukung pertumbuhan.",
      "naya-05":
        "Pertahankan variasi makanan dan waktu tidur yang cukup. Lanjutkan pemantauan rutin.",
      "naya-06":
        "Pertumbuhan berada dalam rentang normal. Teruskan pola makan seimbang dan kunjungan rutin.",
    },
  },
];

const indicators: IndicatorOption[] = [
  {
    id: "bbu",
    label: "Berat Badan menurut Umur (BB/U)",
    shortLabel: "BB/U",
    zScoreKey: "zscoreBbu",
    valueKey: "bb",
    unit: "kg",
    icon: Scale,
  },
  {
    id: "tbu",
    label: "Tinggi Badan menurut Umur (TB/U)",
    shortLabel: "TB/U",
    zScoreKey: "zscoreTbu",
    valueKey: "tb",
    unit: "cm",
    icon: Ruler,
  },
  {
    id: "bbtb",
    label: "Berat Badan menurut Tinggi Badan (BB/TB)",
    shortLabel: "BB/TB",
    zScoreKey: "zscoreBbtb",
    valueKey: "bb",
    unit: "kg",
    icon: Baby,
  },
];

const statusStyles: Record<StatusGizi, string> = {
  normal: "border-teal-200 bg-teal-50 text-teal-700",
  stunting: "border-red-200 bg-red-50 text-red-700",
  wasting: "border-orange-200 bg-orange-50 text-orange-700",
  underweight: "border-amber-200 bg-amber-50 text-amber-700",
  overweight: "border-purple-200 bg-purple-50 text-purple-700",
};

const statusLabels: Record<StatusGizi, string> = {
  normal: "Gizi baik",
  stunting: "Perlu perhatian TB/U",
  wasting: "Perlu perhatian BB/TB",
  underweight: "Berat badan kurang",
  overweight: "Berat badan berlebih",
};

const chart = {
  left: 58,
  right: 716,
  top: 24,
  bottom: 276,
  minScore: -4,
  maxScore: 4,
};

function getY(score: number) {
  return (
    chart.top +
    ((chart.maxScore - score) / (chart.maxScore - chart.minScore)) *
      (chart.bottom - chart.top)
  );
}

function formatScore(score: number | undefined) {
  if (score === undefined) return "Belum tersedia";
  return `${score > 0 ? "+" : ""}${score.toFixed(1)}`;
}

function formatIndicatorValue(
  measurement: CatatanPenimbangan,
  indicator: IndicatorOption,
) {
  const value = measurement[indicator.valueKey];
  return `${value.toFixed(1)} ${indicator.unit}`;
}

function getStatusLabel(status: StatusGizi) {
  return statusLabels[status] ?? "Perlu konsultasi";
}

function GrowthChart({
  measurements,
  indicator,
  selectedMeasurementId,
  onSelect,
}: {
  measurements: CatatanPenimbangan[];
  indicator: IndicatorOption;
  selectedMeasurementId: string;
  onSelect: (id: string) => void;
}) {
  const points = measurements.map((measurement, index) => {
    const zScore = measurement[indicator.zScoreKey] ?? 0;
    const x =
      measurements.length === 1
        ? (chart.left + chart.right) / 2
        : chart.left +
          (index / (measurements.length - 1)) * (chart.right - chart.left);

    return {
      measurement,
      x,
      y: getY(Math.max(chart.minScore, Math.min(chart.maxScore, zScore))),
      zScore,
    };
  });
  const linePath = points
    .map(({ x, y }, index) => `${index === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");
  const selectedPoint =
    points.find(
      ({ measurement }) => measurement.id === selectedMeasurementId,
    ) ?? points[points.length - 1];
  const scoreLines = [-3, -2, 0, 2, 3];
  const bands = [
    { from: 4, to: 3, color: "#fee2e2" },
    { from: 3, to: 2, color: "#fef3c7" },
    { from: 2, to: -2, color: "#ccfbf1" },
    { from: -2, to: -3, color: "#fef3c7" },
    { from: -3, to: -4, color: "#fee2e2" },
  ];

  function selectPoint(id: string) {
    onSelect(id);
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <svg
          aria-label={`Grafik ${indicator.label} berdasarkan skor Z per umur`}
          className="h-auto min-w-[560px] w-full"
          role="group"
          viewBox="0 0 760 330"
        >
          {bands.map(({ from, to, color }) => (
            <rect
              fill={color}
              height={Math.abs(getY(from) - getY(to))}
              key={`${from}-${to}`}
              opacity="0.72"
              width={chart.right - chart.left}
              x={chart.left}
              y={Math.min(getY(from), getY(to))}
            />
          ))}

          {scoreLines.map((score) => (
            <g key={score}>
              <line
                stroke={score === 0 ? "#94a3b8" : "#cbd5e1"}
                strokeDasharray={score === 0 ? undefined : "4 5"}
                strokeWidth={score === 0 ? 1.5 : 1}
                x1={chart.left}
                x2={chart.right}
                y1={getY(score)}
                y2={getY(score)}
              />
              <text
                fill="#64748b"
                fontSize="11"
                textAnchor="end"
                x={chart.left - 10}
                y={getY(score) + 4}
              >
                {score > 0 ? `+${score}` : score} SD
              </text>
            </g>
          ))}

          {points.map(({ x, measurement }) => (
            <text
              fill="#64748b"
              fontSize="11"
              key={measurement.id}
              textAnchor="middle"
              x={x}
              y={chart.bottom + 25}
            >
              {measurement.umurBulan} bln
            </text>
          ))}

          <text
            fill="#475569"
            fontSize="11"
            fontWeight="600"
            textAnchor="middle"
            transform={`rotate(-90 14 ${(chart.top + chart.bottom) / 2})`}
            x="14"
            y={(chart.top + chart.bottom) / 2}
          >
            Skor Z
          </text>

          <path
            d={linePath}
            fill="none"
            stroke="#008f80"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />

          {points.map(({ x, y, measurement, zScore }) => {
            const isSelected = measurement.id === selectedPoint?.measurement.id;

            return (
              <g key={measurement.id}>
                <circle
                  aria-label={`${measurement.umurBulan} bulan, ${formatIndicatorValue(
                    measurement,
                    indicator,
                  )}, Z-score ${formatScore(zScore)}`}
                  className="cursor-pointer outline-none focus-visible:stroke-slate-900"
                  cx={x}
                  cy={y}
                  fill={isSelected ? "#007f72" : "#00A896"}
                  onClick={() => selectPoint(measurement.id)}
                  onFocus={() => selectPoint(measurement.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      selectPoint(measurement.id);
                    }
                  }}
                  onMouseEnter={() => selectPoint(measurement.id)}
                  r={isSelected ? 7 : 5}
                  role="button"
                  stroke="white"
                  strokeWidth="3"
                  tabIndex={0}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {selectedPoint ? (
        <div className="mt-1 flex flex-col gap-2 rounded-xl border border-teal-100 bg-teal-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">
              Detail pengukuran · {selectedPoint.measurement.umurBulan} bulan
            </p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {formatIndicatorValue(selectedPoint.measurement, indicator)}
              <span className="ml-2 font-medium text-[#007f72]">
                Z-score {formatScore(selectedPoint.zScore)}
              </span>
            </p>
          </div>
          <span className="text-xs text-slate-500">
            Arahkan kursor, fokuskan, atau pilih titik pada grafik
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default function KurvaRiwayatPage() {
  const [selectedChildId, setSelectedChildId] = useState(children[0].balita.id);
  const [selectedIndicatorId, setSelectedIndicatorId] =
    useState<IndicatorId>("bbu");
  const [selectedMeasurementId, setSelectedMeasurementId] = useState(
    children[0].measurements[children[0].measurements.length - 1].id,
  );

  const selectedChild =
    children.find(({ balita }) => balita.id === selectedChildId) ?? children[0];
  const indicator =
    indicators.find(({ id }) => id === selectedIndicatorId) ?? indicators[0];
  const selectedMeasurement =
    selectedChild.measurements.find(
      ({ id }) => id === selectedMeasurementId,
    ) ?? selectedChild.measurements[selectedChild.measurements.length - 1];

  function handleChildChange(childId: string) {
    const nextChild =
      children.find(({ balita }) => balita.id === childId) ?? children[0];
    setSelectedChildId(childId);
    setSelectedMeasurementId(
      nextChild.measurements[nextChild.measurements.length - 1].id,
    );
  }

  return (
    <>
      <SidebarOrangTua user={parent} />
      <main className="min-h-screen bg-[#f5f9f8] pb-24 text-slate-800 lg:ml-72 lg:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
          <header className="mb-7 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-[#008f80]">
                Pantau pertumbuhan dari waktu ke waktu
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Grafik KMS & riwayat
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Lihat catatan pengukuran dan pola tumbuh kembang anak.
              </p>
            </div>

            <label className="relative block w-full sm:max-w-xs">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Profil anak
              </span>
              <select
                aria-label="Pilih profil anak"
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-4 pr-11 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                onChange={(event) => handleChildChange(event.target.value)}
                value={selectedChildId}
              >
                {children.map(({ balita, usiaLabel, jenisKelaminLabel }) => (
                  <option key={balita.id} value={balita.id}>
                    Ananda {balita.nama} - {usiaLabel}, {jenisKelaminLabel}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3.5 right-4 h-4 w-4 text-slate-400"
              />
            </label>
          </header>

          <section className="mb-6 flex flex-col gap-4 rounded-3xl bg-gradient-to-br from-[#00A896] to-[#078f83] p-5 text-white shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Baby aria-hidden="true" className="h-6 w-6" />
              </span>
              <div>
                <p className="text-sm text-teal-50">Grafik pertumbuhan</p>
                <h2 className="mt-1 text-xl font-bold">
                  Ananda {selectedChild.balita.nama}
                </h2>
                <p className="mt-1 text-sm text-teal-50">
                  {selectedChild.usiaLabel} · {selectedChild.jenisKelaminLabel}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-sm font-semibold sm:self-auto">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              {selectedChild.measurements.length} kali diukur
            </div>
          </section>

          <section
            aria-labelledby="growth-chart-heading"
            className="mb-6 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-6"
          >
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                KMS digital · kurva pertumbuhan WHO
              </p>
              <h2
                className="mt-1 text-lg font-bold text-slate-900"
                id="growth-chart-heading"
              >
                Indikator pertumbuhan
              </h2>
            </div>

            <div
              aria-label="Pilih indikator pertumbuhan"
              className="mb-5 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-1.5"
              role="tablist"
            >
              {indicators.map(({ id, shortLabel, icon: Icon }) => {
                const isSelected = selectedIndicatorId === id;

                return (
                  <button
                    aria-selected={isSelected}
                    className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-2 py-2 text-xs font-semibold transition sm:text-sm ${
                      isSelected
                        ? "bg-white text-[#008f80] shadow-sm ring-1 ring-slate-100"
                        : "text-slate-500 hover:bg-white/70 hover:text-slate-700"
                    }`}
                    id={`tab-${id}`}
                    key={id}
                    onClick={() => setSelectedIndicatorId(id)}
                    role="tab"
                    type="button"
                  >
                    <Icon aria-hidden="true" className="hidden h-4 w-4 sm:block" />
                    {shortLabel}
                  </button>
                );
              })}
            </div>

            <div
              aria-labelledby={`tab-${selectedIndicatorId}`}
              id={`panel-${selectedIndicatorId}`}
              role="tabpanel"
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-700">
                  {indicator.label}
                </p>
                <span className="text-xs text-slate-400">
                  WHO Child Growth Standards · Skor Z
                </span>
              </div>

              <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-red-200" />
                  Di luar rentang
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-amber-200" />
                  Perlu perhatian
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-[#00A896]/40" />
                  Rentang normal
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-0.5 w-3 bg-[#008f80]" />
                  Pengukuran anak
                </span>
              </div>

              <GrowthChart
                indicator={indicator}
                measurements={selectedChild.measurements}
                onSelect={setSelectedMeasurementId}
                selectedMeasurementId={selectedMeasurement.id}
              />
            </div>

            <p className="mt-4 flex gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-500">
              <Info
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-[#008f80]"
              />
              Visualisasi ini menggunakan data demo dan pita skor Z sebagai
              panduan umum, bukan kurva persentil WHO berdasarkan jenis kelamin
              dan usia yang tervalidasi. Hasil bukan diagnosis; konsultasikan
              pertumbuhan anak dengan tenaga kesehatan.
            </p>
          </section>

          <section aria-labelledby="history-heading">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                  Catatan Posyandu
                </p>
                <h2
                  className="mt-1 text-lg font-bold text-slate-900"
                  id="history-heading"
                >
                  Riwayat pengukuran
                </h2>
              </div>
              <span className="text-xs text-slate-400">
                {selectedChild.measurements.length} catatan · terbaru lebih dulu
              </span>
            </div>

            <div className="space-y-4">
              {[...selectedChild.measurements].reverse().map((measurement) => {
                const score = measurement[indicator.zScoreKey];
                const isSelected = measurement.id === selectedMeasurement.id;

                return (
                  <article
                    className={`rounded-2xl border bg-white p-4 shadow-sm transition sm:p-5 ${
                      isSelected
                        ? "border-[#00A896]/40 ring-2 ring-[#00A896]/10"
                        : "border-slate-100"
                    }`}
                    key={measurement.id}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-slate-900">
                            Usia {measurement.umurBulan} bulan
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[measurement.statusGizi]}`}
                          >
                            <CheckCircle2
                              aria-hidden="true"
                              className="h-3.5 w-3.5"
                            />
                            {getStatusLabel(measurement.statusGizi)}
                          </span>
                        </div>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                          <CalendarDays
                            aria-hidden="true"
                            className="h-3.5 w-3.5"
                          />
                          {selectedChild.dates[measurement.id]}
                        </p>
                      </div>
                      <button
                        className="inline-flex min-h-9 items-center gap-1.5 self-start rounded-lg px-3 text-xs font-semibold text-[#008f80] transition hover:bg-teal-50"
                        onClick={() => setSelectedMeasurementId(measurement.id)}
                        type="button"
                      >
                        <ClipboardList
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                        Tampilkan di grafik
                      </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-3 sm:grid-cols-4">
                      <p className="text-xs text-slate-500">
                        Berat badan
                        <span className="mt-1 block text-sm font-bold text-slate-800">
                          {measurement.bb.toFixed(1)} kg
                        </span>
                      </p>
                      <p className="text-xs text-slate-500">
                        Tinggi badan
                        <span className="mt-1 block text-sm font-bold text-slate-800">
                          {measurement.tb.toFixed(1)} cm
                        </span>
                      </p>
                      <p className="text-xs text-slate-500">
                        Lingkar kepala
                        <span className="mt-1 block text-sm font-bold text-slate-800">
                          {measurement.lk?.toFixed(1) ?? "—"} cm
                        </span>
                      </p>
                      <p className="text-xs text-slate-500">
                        Lingkar lengan atas
                        <span className="mt-1 block text-sm font-bold text-slate-800">
                          {measurement.lila?.toFixed(1) ?? "—"} cm
                        </span>
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">
                        Nilai Z-score:
                      </span>
                      <span>
                        BB/U {formatScore(measurement.zscoreBbu)}
                      </span>
                      <span>TB/U {formatScore(measurement.zscoreTbu)}</span>
                      <span>BB/TB {formatScore(measurement.zscoreBbtb)}</span>
                      <span className="text-slate-300">|</span>
                      <span className="font-medium text-[#008f80]">
                        Grafik {indicator.shortLabel}: {formatScore(score)}
                      </span>
                    </div>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <Sparkles
                          aria-hidden="true"
                          className="h-4 w-4 text-[#008f80]"
                        />
                        Rekomendasi sistem / kader
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {selectedChild.recommendations[measurement.id] ??
                          measurement.catatanKader ??
                          "Lanjutkan pemantauan pertumbuhan secara rutin di Posyandu."}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
