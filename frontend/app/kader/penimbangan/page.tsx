'use client';

import React, { useState } from 'react';
import { 
  Scale, 
  User, 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  RotateCcw,
  FileText,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { SidebarKader } from '@/components/SidebarKader';

export default function PenimbanganKaderPage() {
  const [selectedBalita, setSelectedBalita] = useState('Muhammad Bilal Al-Fatih (NIK: 3271038491020001)');
  const [bb, setBb] = useState('9.80');
  const [tb, setTb] = useState('80.5');
  const [lila, setLila] = useState('12.8');
  const [lk, setLk] = useState('47.0');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans text-slate-800">
      {/* Sidebar Role Kader */}
      <SidebarKader />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Header Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="text-[#00A896] font-semibold">Posyandu Mawar 04</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Pencatatan Penimbangan Rutin</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-teal-50 text-[#00A896] px-3 py-1 rounded-full font-semibold border border-teal-100">
              Kader Pengukur: Ibu Siti Rahayu
            </span>
          </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto w-full space-y-6">
          
          {/* Page Title & Context */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#00A896] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  Modul Antropometri Lapangan
                </span>
                <span className="text-xs text-slate-400">&bull; Standar Kemenkes RI & WHO</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Formulir Entry Pengukuran & Deteksi Gizi
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Masukkan hasil pengukuran fisik bulanan balita untuk analisis Z-Score otomatis dan rujukan dini.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 bg-white border border-gray-200 px-3 py-2 rounded-xl shadow-sm font-medium">
                📅 Periode: Oktober 2024
              </span>
            </div>
          </div>

          {/* Success Banner Notice if submitted */}
          {isSubmitted && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-emerald-900">Data Berhasil Disimpan & Disinkronkan!</h4>
                  <p className="text-[11px] text-emerald-700">Z-Score berhasil dihitung dan terhubung otomatis ke database PPGBM Puskesmas.</p>
                </div>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-xs font-semibold text-emerald-800 hover:underline px-3 py-1 bg-white rounded-lg border border-emerald-200"
              >
                Input Baru
              </button>
            </div>
          )}

          {/* Main Form Container */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            
            {/* Form Header Steps */}
            <div className="bg-teal-50/60 px-6 py-3.5 border-b border-teal-100/50 flex items-center gap-6 text-xs">
              <div className="flex items-center gap-2 text-[#00A896] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#00A896] text-white flex items-center justify-center text-[10px]">1</span>
                <span>Identifikasi Balita & Petugas</span>
              </div>
              <span className="text-teal-300">/</span>
              <div className="flex items-center gap-2 text-[#00A896] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#00A896] text-white flex items-center justify-center text-[10px]">2</span>
                <span>Parameter Antropometri & Klinis</span>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }} className="p-8 space-y-8">
              
              {/* SECTION 1: Identifikasi Balita */}
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00A896]"></span>
                  1. Pilih Balita & Tanggal Pemeriksaan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Pilih Balita (Nama / NIK)</label>
                    <select 
                      value={selectedBalita}
                      onChange={(e) => setSelectedBalita(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#00A896] transition-colors"
                    >
                      <option>Muhammad Bilal Al-Fatih (NIK: 3271038491020001)</option>
                      <option>Aisyah Putri Azzahra (NIK: 3271035512210003)</option>
                      <option>Kenzo Alvaro Daniswara (NIK: 3271031908220005)</option>
                      <option>Nathania Queensha (NIK: 3271034403230002)</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Tanggal Pengukuran</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="date" 
                        defaultValue="2024-10-12"
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#00A896]" 
                      />
                    </div>
                  </div>
                </div>

                {/* Info Chip Balita Terpilih */}
                <div className="p-3 bg-teal-50/40 rounded-xl border border-teal-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold flex items-center justify-center text-[10px]">
                      L
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">Muhammad Bilal Al-Fatih &bull; <span className="text-slate-500 font-normal">24 Bulan (2 Tahun)</span></p>
                      <p className="text-[11px] text-slate-500">Ibu: Ny. Rahmawati &bull; Wilayah: RT 02 / RW 04</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#00A896] font-semibold bg-white px-2.5 py-1 rounded-lg border border-teal-200 shadow-sm">
                    NIK Terverifikasi Dukcapil
                  </span>
                </div>
              </div>

              {/* SECTION 2: Parameter Antropometri */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00A896]"></span>
                  2. Parameter Pengukuran Antropometri Fisik
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Berat Badan */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-800">Berat Badan (BB)</label>
                      <span className="text-[10px] bg-teal-100 text-[#00A896] px-2 py-0.5 rounded-md font-bold">BB/U</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.01" 
                        value={bb}
                        onChange={(e) => setBb(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-lg font-extrabold text-slate-900 focus:outline-none focus:border-[#00A896]" 
                      />
                      <span className="text-xs font-bold text-slate-500">kg</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Timbangan digital 2 desimal</p>
                  </div>

                  {/* Panjang / Tinggi Badan */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-800">Tinggi / PB</label>
                      <span className="text-[10px] bg-sky-100 text-sky-700 px-2 py-0.5 rounded-md font-bold">PB/U</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.1" 
                        value={tb}
                        onChange={(e) => setTb(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-lg font-extrabold text-slate-900 focus:outline-none focus:border-[#00A896]" 
                      />
                      <span className="text-xs font-bold text-slate-500">cm</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Stadiometer standar WHO</p>
                  </div>

                  {/* Lingkar Lengan Atas */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-800">Lingkar Lengan (LiLA)</label>
                      <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-md font-bold">Wasting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.1" 
                        value={lila}
                        onChange={(e) => setLila(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-lg font-extrabold text-slate-900 focus:outline-none focus:border-[#00A896]" 
                      />
                      <span className="text-xs font-bold text-slate-500">cm</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Pita LiLA 3 warna Kemenkes</p>
                  </div>

                  {/* Lingkar Kepala */}
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-slate-800">Lingkar Kepala</label>
                      <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded-md font-bold">LK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input 
                        type="number" 
                        step="0.1" 
                        value={lk}
                        onChange={(e) => setLk(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-lg font-extrabold text-slate-900 focus:outline-none focus:border-[#00A896]" 
                      />
                      <span className="text-xs font-bold text-slate-500">cm</span>
                    </div>
                    <p className="text-[10px] text-slate-400">Pita non-elastis kepala</p>
                  </div>

                </div>

                {/* Sub Options: Posisi & Edema */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <label className="text-xs font-bold text-slate-800">Posisi Pengukuran Tinggi/Panjang Badan</label>
                    <div className="flex items-center gap-6 text-xs font-medium pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="posisi_ukur" defaultChecked className="text-[#00A896] focus:ring-[#00A896]" />
                        <span>Terlentang (Recumbent &lt; 2 Thn)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="posisi_ukur" className="text-[#00A896] focus:ring-[#00A896]" />
                        <span>Berdiri (Standing &ge; 2 Thn)</span>
                      </label>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <label className="text-xs font-bold text-slate-800">Status Edema Bilateral (Pitting Oedema)</label>
                    <div className="flex items-center gap-6 text-xs font-medium pt-1">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="edema_status" defaultChecked className="text-[#00A896] focus:ring-[#00A896]" />
                        <span className="text-emerald-700 font-semibold">Tidak Ada Edema (Normal)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="edema_status" className="text-rose-600 focus:ring-rose-500" />
                        <span className="text-rose-600 font-semibold">Ada Pitting (+/++/+++)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* LIVE AI ENGINE PREVIEW ANALYSIS CARD */}
              <div className="p-5 bg-gradient-to-r from-rose-50 via-amber-50 to-teal-50 rounded-2xl border border-rose-100 space-y-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-xs">
                    <Sparkles className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span>LIVE AI ENGINE & Z-SCORE ANALYSIS (WHO ANTHRO)</span>
                  </div>
                  <span className="text-[10px] bg-white text-rose-600 px-2.5 py-1 rounded-full font-bold border border-rose-200 shadow-sm">
                    Status: Risiko Stunting Ringan & Gizi Kurang
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                  <div className="p-2.5 bg-white/80 rounded-xl border border-rose-100">
                    <span className="text-slate-400 font-medium text-[11px]">Z-Score BB/U:</span>
                    <p className="font-extrabold text-rose-600 text-sm mt-0.5">-2.3 SD (Underweight)</p>
                  </div>
                  <div className="p-2.5 bg-white/80 rounded-xl border border-rose-100">
                    <span className="text-slate-400 font-medium text-[11px]">Z-Score PB/U:</span>
                    <p className="font-extrabold text-rose-600 text-sm mt-0.5">-2.4 SD (Tinggi Rendah)</p>
                  </div>
                  <div className="p-2.5 bg-white/80 rounded-xl border border-rose-100">
                    <span className="text-slate-400 font-medium text-[11px]">Z-Score BB/PB:</span>
                    <p className="font-extrabold text-amber-600 text-sm mt-0.5">-1.75 SD (Wasting)</p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 pt-1">
                  💡 <strong>Rekomendasi Otomatis:</strong> Pemberian Makanan Tambahan (PMT) Bahan Pangan Lokal kaya protein hewani (telur & ikan) selama 90 hari. Terhubung otomatis ke rujukan Puskesmas Cilandak.
                </p>
              </div>

              {/* Form Action Footer Buttons */}
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button 
                  type="button" 
                  className="w-full sm:w-auto px-5 py-3 bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset Formulir
                </button>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button 
                    type="button" 
                    className="flex-1 sm:flex-none px-5 py-3 bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold rounded-xl transition-colors"
                  >
                    Simpan Draft Sementara
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 sm:flex-none px-6 py-3 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-[#00A896]/20 flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Simpan & Jalankan Deteksi Dini AI
                  </button>
                </div>
              </div>

            </form>

          </div>

        </div>
      </main>
    </div>
  );
}