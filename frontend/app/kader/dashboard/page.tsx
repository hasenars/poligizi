'use client';

import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Download, 
  PlusCircle, 
  Search, 
  Bell,
  ChevronRight,
  Calendar,
  FileText
} from 'lucide-react';
import { SidebarKader } from '@/components/SidebarKader';
import { BadgeStatus } from '@/components/ui/Badge';
import { StatusGizi } from '@/types';

// Dummy data untuk tabel balita penimbangan terkini
const balitaList = [
  {
    id: '1',
    nik: '3271038491020001',
    nama: 'Muhammad Bilal',
    usia: '18 Bln',
    gender: 'L',
    tglTimbang: '12 Okt 2024',
    bb: '10.8 kg',
    tb: '81.2 cm',
    lila: '14.5 cm',
    status: 'normal' as StatusGizi,
  },
  {
    id: '2',
    nik: '3271038491020087',
    nama: 'Aisha Nur Syifa',
    usia: '14 Bln',
    gender: 'P',
    tglTimbang: '12 Okt 2024',
    bb: '7.2 kg',
    tb: '69.5 cm',
    lila: '11.4 cm',
    status: 'stunting' as StatusGizi,
  },
  {
    id: '3',
    nik: '3271038491020042',
    nama: 'Rayyan Al-Ghifari',
    usia: '9 Bln',
    gender: 'L',
    tglTimbang: '11 Okt 2024',
    bb: '6.8 kg',
    tb: '67.0 cm',
    lila: '10.9 cm',
    status: 'wasting' as StatusGizi,
  },
  {
    id: '4',
    nik: '3271038491020015',
    nama: 'Kanza Zahra',
    usia: '22 Bln',
    gender: 'P',
    tglTimbang: '11 Okt 2024',
    bb: '9.1 kg',
    tb: '80.5 cm',
    lila: '11.2 cm',
    status: 'underweight' as StatusGizi,
  },
  {
    id: '5',
    nik: '3271038491020099',
    nama: 'Arka Danendra',
    usia: '6 Bln',
    gender: 'L',
    tglTimbang: '10 Okt 2024',
    bb: '7.9 kg',
    tb: '66.8 cm',
    lila: '13.8 cm',
    status: 'normal' as StatusGizi,
  },
  {
    id: '6',
    nik: '3271038491020033',
    nama: 'Fathiya Nabila',
    usia: '32 Bln',
    gender: 'P',
    tglTimbang: '10 Okt 2024',
    bb: '16.4 kg',
    tb: '92.0 cm',
    lila: '16.5 cm',
    status: 'overweight' as StatusGizi,
  },
];

export default function KaderDashboard() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans text-slate-800">
      {/* Sidebar Role Kader */}
      <SidebarKader />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="text-[#00A896] font-semibold">Posyandu Mawar 04, Kelurahan Sukamaju</span>
            <span>/</span>
            <span>Monitoring Balita</span>
            <span>/</span>
            <span className="text-slate-800 font-semibold">Dashboard Utama</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white"></span>
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="w-9 h-9 rounded-full bg-[#00A896]/10 text-[#00A896] font-bold flex items-center justify-center text-sm">
                SR
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-800">Ibu Siti Rahayu</p>
                <p className="text-[11px] text-slate-500">Kader Posyandu Mawar 04</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-6">
          
          {/* Title & Action Buttons Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard Pemantauan Gizi Balita</h1>
              <p className="text-xs text-slate-500 mt-1">
                Posyandu Mawar 04, Kelurahan Sukamaju &bull; Periode Penimbangan Oktober 2024
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 text-xs font-semibold rounded-xl transition-all shadow-sm">
                <Download className="w-4 h-4 text-slate-500" />
                Unduh Rekap Bulanan
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shadow-sm shadow-[#00A896]/20">
                <PlusCircle className="w-4 h-4" />
                Input Penimbangan Baru
              </button>
            </div>
          </div>

          {/* Top Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Total Balita */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                  +12 anak baru
                </span>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Balita Terpantau</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-extrabold text-slate-900">248</h3>
                  <span className="text-xs text-slate-500">Anak</span>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-slate-500">Target Kehadiran SKDN</span>
                <span className="font-bold text-slate-700">94.2%</span>
              </div>
            </div>

            {/* Card 2: Prevalensi Stunting */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">
                  12 Anak Terindikasi
                </span>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Prevalensi Stunting</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-extrabold text-rose-600">4.8%</h3>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-slate-500">Standar Nasional &lt; Kemenkes</span>
                <span className="font-bold text-rose-600">14.0%</span>
              </div>
            </div>

            {/* Card 3: Status Gizi Normal */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">
                  82.7% Optimal
                </span>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Status Gizi Normal</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-extrabold text-slate-900">205</h3>
                  <span className="text-xs text-slate-500">Anak</span>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-slate-500">Pita Hijau Buku KIA</span>
                <span className="font-bold text-emerald-600">+18 Bln Ini</span>
              </div>
            </div>

            {/* Card 4: Perlu Intervensi Segera */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">
                  14 PMT + 4 Rujuk
                </span>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Perlu Intervensi Segera</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <h3 className="text-3xl font-extrabold text-amber-600">18</h3>
                  <span className="text-xs text-slate-500">Kasus</span>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-slate-500">Tindak Lanjut Puskesmas</span>
                <span className="font-bold text-slate-700">Prioritas 1</span>
              </div>
            </div>

          </div>

          {/* Main Content Split: Table List & Distribution Summary / Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left 2 Columns: Tabel Daftar Balita Penimbangan Terkini */}
            <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-gray-100">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Daftar Balita Penimbangan Terkini</h2>
                  <p className="text-xs text-slate-500">Registrasi pengukuran antropometri fisik Posyandu Mawar 04</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-gray-100 text-slate-600 rounded-lg">
                  248 Data Tercatat
                </span>
              </div>

              {/* Search & Filter Toolbar */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Cari nama balita / NIK..." 
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#00A896] transition-colors"
                  />
                </div>
                <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-slate-600 focus:outline-none focus:border-[#00A896]">
                  <option>Semua Status Gizi</option>
                  <option>Normal</option>
                  <option>Stunting</option>
                  <option>Wasting</option>
                  <option>Underweight</option>
                  <option>Overweight</option>
                </select>
                <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-slate-600 focus:outline-none focus:border-[#00A896]">
                  <option>Semua RT/RW</option>
                  <option>RT 01 / RW 04</option>
                  <option>RT 02 / RW 04</option>
                </select>
              </div>

              {/* Table Data */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      <th className="py-3 px-3">Nama Balita & NIK</th>
                      <th className="py-3 px-3">Usia</th>
                      <th className="py-3 px-3">Gender</th>
                      <th className="py-3 px-3">Tgl Timbang</th>
                      <th className="py-3 px-3">Hasil Ukur (BB / TB / LILA)</th>
                      <th className="py-3 px-3">Status Gizi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50 text-xs">
                    {balitaList.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-3">
                          <p className="font-bold text-slate-800">{item.nama}</p>
                          <p className="text-[11px] text-slate-400 font-mono">{item.nik}</p>
                        </td>
                        <td className="py-3.5 px-3 font-medium text-slate-600">{item.usia}</td>
                        <td className="py-3.5 px-3">
                          <span className={`inline-flex w-6 h-6 items-center justify-center rounded-full font-bold text-[10px] ${item.gender === 'L' ? 'bg-sky-50 text-sky-600' : 'bg-pink-50 text-pink-600'}`}>
                            {item.gender}
                          </span>
                        </td>
                        <td className="py-3.5 px-3 text-slate-600">{item.tglTimbang}</td>
                        <td className="py-3.5 px-3 font-medium text-slate-700">
                          <p>{item.bb}</p>
                          <p className="text-[11px] text-slate-500">{item.tb} &bull; {item.lila}</p>
                        </td>
                        <td className="py-3.5 px-3">
                          <BadgeStatus status={item.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination Info */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
                <span>Menampilkan 1-6 dari 248 data balita terdaftar</span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Sebelumnya</button>
                  <span className="font-bold text-slate-700">1 / 42</span>
                  <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">Selanjutnya</button>
                </div>
              </div>

            </div>

            {/* Right Column: Distribusi Status Gizi & Perhatian Mendesak */}
            <div className="space-y-6">
              
              {/* Distribusi Status Gizi */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Distribusi Status Gizi</h3>
                  <span className="text-[11px] text-slate-400">Standar Baku Antropometri WHO</span>
                </div>

                {/* Donut Chart Mock visual */}
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-36 h-36 rounded-full border-8 border-emerald-500 flex items-center justify-center text-center shadow-inner">
                    <div>
                      <span className="text-2xl font-black text-slate-900">248</span>
                      <p className="text-[10px] text-slate-500 font-semibold uppercase">Balita Terdata</p>
                    </div>
                  </div>
                </div>

                {/* Legend List */}
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                      <span className="text-slate-600">Normal (Pita Hijau)</span>
                    </div>
                    <span className="font-bold text-slate-800">205 (82.7%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                      <span className="text-slate-600">Gizi Kurang (Underweight)</span>
                    </div>
                    <span className="font-bold text-slate-800">18 (7.3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                      <span className="text-slate-600">Stunting / Pendek</span>
                    </div>
                    <span className="font-bold text-slate-800">12 (4.8%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                      <span className="text-slate-600">Risiko Gizi Lebih</span>
                    </div>
                    <span className="font-bold text-slate-800">13 (5.2%)</span>
                  </div>
                </div>
              </div>

              {/* Perhatian Mendesak */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Perhatian Mendesak</h3>
                  <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[11px] font-bold rounded-full">3 Balita</span>
                </div>

                <div className="space-y-3 text-xs">
                  {/* Alert Item 1 */}
                  <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Aisha Nur Syifa (14 Bln)</span>
                      <span className="px-1.5 py-0.5 bg-rose-500 text-white font-bold text-[10px] rounded">2T STUNTING</span>
                    </div>
                    <p className="text-[11px] text-slate-600">BB tidak naik 2x berturut-turut. Z-Score PB/U: -2.8 SD.</p>
                    <p className="text-[11px] font-semibold text-rose-700">💡 Rekomendasi: Rujuk Dokter Puskesmas & Intervensi PMT Pangan Lokal.</p>
                  </div>

                  {/* Alert Item 2 */}
                  <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Rayyan Al-Ghifari (9 Bln)</span>
                      <span className="px-1.5 py-0.5 bg-rose-600 text-white font-bold text-[10px] rounded">SEVERELY STUNTED</span>
                    </div>
                    <p className="text-[11px] text-slate-600">Z-Score PB/U: -3.1 SD (Sangat Pendek), LILA: 10.9 cm.</p>
                    <p className="text-[11px] font-semibold text-rose-700">💡 Rekomendasi: Verifikasi ulang alat ukur & Intervensi Protein Hewani intensif.</p>
                  </div>

                  {/* Alert Item 3 */}
                  <div className="p-3 bg-amber-50/50 border border-amber-100 rounded-xl space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">Kanza Zahra (22 Bln)</span>
                      <span className="px-1.5 py-0.5 bg-amber-500 text-white font-bold text-[10px] rounded">LILA KUNING</span>
                    </div>
                    <p className="text-[11px] text-slate-600">LILA 11.2 cm &bull; Berat badan stagnan 3 bulan terakhir.</p>
                    <p className="text-[11px] font-semibold text-amber-800">💡 Rekomendasi: Paket Pemberian Makanan Tambahan (PMT) Pemulihan 90 hari.</p>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-gray-50 hover:bg-gray-100 text-slate-700 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1">
                  Buka Semua Daftar Peringatan (18 Anak) <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Bottom Banner: Jadwal Penimbangan Berikutnya & Protokol */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            
            {/* Protokol Penanganan */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Protokol Penanganan Balita 2T (Tidak Naik Berat Badan 2x)</h3>
                  <p className="text-xs text-slate-500 mt-1">Wajib dirujuk ke Tenaga Gizi Puskesmas untuk konfirmasi konvergensi stunting dan penentuan paket PMT.</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-[11px] text-slate-400">Standar Operasional Prosedur Kemenkes</span>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors">
                  Unduh SOP
                </button>
              </div>
            </div>

            {/* Jadwal Penimbangan Berikutnya */}
            <div className="bg-[#00A896] text-white rounded-2xl p-6 shadow-md shadow-[#00A896]/20 flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full text-white">
                    Jadwal Penimbangan Berikutnya
                  </span>
                  <h3 className="text-lg font-bold mt-2">Rabu, 13 November 2024</h3>
                  <p className="text-xs text-teal-100 mt-0.5">Balai Warga RW 04 &bull; Pukul 08:30 - 12:00 WIB</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-teal-600 text-xs">
                <span>Target: 250 Balita</span>
                <button className="px-4 py-2 bg-white text-[#00A896] hover:bg-teal-50 font-bold rounded-xl transition-colors shadow-sm">
                  Kirim WhatsApp Blast
                </button>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}