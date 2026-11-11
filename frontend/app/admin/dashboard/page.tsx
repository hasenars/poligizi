import React from 'react';
import { 
  Users, 
  AlertTriangle, 
  CheckCircle2, 
  Download, 
  PlusCircle, 
  Search, 
  Bell 
} from 'lucide-react';
import SidebarKader from '@/components/SidebarKader';

export default function KaderDashboard() {
  return (
    <div className="min-h-screen bg-[#F0FDF4] text-[#1E293B] flex">
      
      {/* Memanggil Komponen Sidebar Terpisah */}
      <SidebarKader />

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>Posyandu</span> / <span>Monitoring Balita</span> / <span className="text-[#00A896] font-semibold">Dashboard Utama</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-[#1E293B]">Dashboard Pemantauan Gizi Balita</h1>
            <p className="text-xs text-slate-500 mt-0.5">Posyandu Mawar 04, Kelurahan Sukamaju • Periode Penimbangan Oktober 2024</p>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download className="w-3.5 h-3.5" /> Unduh Rekap Bulanan
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#00A896] text-white text-xs font-semibold rounded-xl hover:bg-[#008f80] shadow-sm transition">
              <PlusCircle className="w-3.5 h-3.5" /> + Input Penimbangan Baru
            </button>
          </div>
        </div>

        {/* STATS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          {/* Card 1: Total Balita */}
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-[#00A896]">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600">+12 anak baru</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Total Balita Terpantau</p>
            <h3 className="text-3xl font-extrabold text-[#1E293B] mt-1">248 <span className="text-sm font-normal text-slate-500">Anak</span></h3>
            <div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center text-xs text-slate-500">
              <span>Target Kehadiran SKDN</span>
              <span className="font-semibold text-slate-700">94.2%</span>
            </div>
          </div>

          {/* Card 2: Prevalensi Stunting */}
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-600">12 Anak Terindikasi</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Prevalensi Stunting</p>
            <h3 className="text-3xl font-extrabold text-rose-600 mt-1">4.8%</h3>
            <div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center text-xs text-slate-500">
              <span>Standar Nasional Kemenkes</span>
              <span className="font-semibold text-rose-600">&lt; 14.0%</span>
            </div>
          </div>

          {/* Card 3: Status Gizi Normal */}
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-600">82.7% Optimal</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status Gizi Normal</p>
            <h3 className="text-3xl font-extrabold text-[#1E293B] mt-1">205 <span className="text-sm font-normal text-slate-500">Anak</span></h3>
            <div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center text-xs text-slate-500">
              <span>Pita Hijau Buku KIA</span>
              <span className="font-semibold text-emerald-600">+18 Bln Ini</span>
            </div>
          </div>

          {/* Card 4: Perlu Intervensi Segera */}
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600">
                <Bell className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-600">14 PMT + 4 Rujukan</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Perlu Intervensi Segera</p>
            <h3 className="text-3xl font-extrabold text-sky-600 mt-1">18 <span className="text-sm font-normal text-slate-500">Kasus</span></h3>
            <div className="mt-3 pt-3 border-t border-slate-50 flex justify-between items-center text-xs text-slate-500">
              <span>Tindak Lanjut Puskesmas</span>
              <span className="font-semibold text-rose-600">Prioritas 1</span>
            </div>
          </div>

        </div>

        {/* LOWER SECTION: TABLE & SIDE PANEL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left / Main Part: Tabel Balita */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="font-bold text-base text-[#1E293B]">Daftar Balita Penimbangan Terkini</h2>
                <p className="text-xs text-slate-500">Registrasi pengukuran antropometri fisik Posyandu Mawar 04</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">248 Data Tercatat</span>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input 
                  type="text" 
                  placeholder="Cari nama balita / NIK..." 
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#00A896]/20 focus:border-[#00A896]"
                />
              </div>
              <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2 outline-none">
                <option>Semua Status Gizi</option>
              </select>
              <select className="bg-slate-50 border border-slate-200 text-slate-600 text-xs rounded-xl px-3 py-2 outline-none">
                <option>Semua RT/RW</option>
              </select>
            </div>

            {/* Table Mockup */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase">
                    <th className="pb-3 px-2">Nama Balita & NIK</th>
                    <th className="pb-3 px-2">Usia</th>
                    <th className="pb-3 px-2">Gender</th>
                    <th className="pb-3 px-2">Tgl Timbang</th>
                    <th className="pb-3 px-2">Hasil Ukur (BB / TB / LiLA)</th>
                    <th className="pb-3 px-2">Status Gizi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 text-xs">
                  
                  {/* Row 1 */}
                  <tr>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center font-bold justify-center text-[10px]">MB</div>
                        <div>
                          <p className="font-bold text-[#1E293B]">Muhammad Bilal</p>
                          <p className="text-[10px] text-slate-400">3271038491020001</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-slate-600">18 Bln</td>
                    <td className="py-3 px-2 text-slate-600">L</td>
                    <td className="py-3 px-2 text-slate-600">12 Okt 2024</td>
                    <td className="py-3 px-2 font-mono text-[11px] text-slate-700">10.8 kg • 81.2 cm • 14.5 cm</td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Normal
                      </span>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr>
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center font-bold justify-center text-[10px]">AN</div>
                        <div>
                          <p className="font-bold text-[#1E293B]">Aisha Nur Syifa</p>
                          <p className="text-[10px] text-slate-400">3271038491020087</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-slate-600">14 Bln</td>
                    <td className="py-3 px-2 text-slate-600">P</td>
                    <td className="py-3 px-2 text-slate-600">12 Okt 2024</td>
                    <td className="py-3 px-2 font-mono text-[11px] text-slate-700">7.2 kg • 69.5 cm • 11.4 cm</td>
                    <td className="py-3 px-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Stunting
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>

          {/* Right Part: Distribusi & Peringatan */}
          <div className="space-y-6">
            
            {/* Distribusi Status Gizi */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h2 className="font-bold text-base text-[#1E293B] mb-1">Distribusi Status Gizi</h2>
              <p className="text-xs text-slate-400 mb-4">Standar Baku Antropometri WHO</p>

              <div className="flex items-center justify-center my-4">
                <div className="w-32 h-32 rounded-full border-8 border-emerald-500 flex flex-col items-center justify-center text-center shadow-inner bg-teal-50/20">
                  <span className="text-xl font-extrabold text-[#1E293B]">248</span>
                  <span className="text-[10px] text-slate-400">BALITA TERDATA</span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-50 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Normal</span>
                  <span className="font-bold">205 (82.7%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Gizi Kurang</span>
                  <span className="font-bold">18 (7.3%)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-slate-600"><span className="w-2.5 h-2.5 rounded-full bg-rose-600"></span> Stunting</span>
                  <span className="font-bold">12 (4.8%)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}