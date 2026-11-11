'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bell, 
  PlusCircle, 
  RefreshCw, 
  Download, 
  Send, 
  Printer, 
  FileText, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Package
} from 'lucide-react';
import { SidebarKader } from '@/components/SidebarKader';

export default function JadwalKaderPage() {
  const [selectedDate, setSelectedDate] = useState('13');

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
            <span className="text-slate-800 font-semibold">Jadwal Penimbangan & Agenda</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-teal-50 text-[#00A896] px-3 py-1 rounded-full font-semibold border border-teal-100">
              Kader: Ibu Siti Rahayu
            </span>
          </div>
        </header>

        <div className="p-8 space-y-6">
          
          {/* Top Action & Title Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#00A896] bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100">
                  Kalender Operasional Lapangan
                </span>
                <span className="text-xs text-slate-400">&bull; Kemenkes x PPGBM Realtime</span>
              </div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Jadwal Penimbangan & Agenda Posyandu
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Atur agenda penimbangan bulanan, alokasi kader tugas, dan notifikasi otomatis WhatsApp ke orang tua balita.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 text-xs font-semibold rounded-xl transition-all shadow-sm">
                <RefreshCw className="w-4 h-4 text-slate-500" />
                Sinkronisasi Google Calendar
              </button>
              
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shadow-sm shadow-[#00A896]/20">
                <PlusCircle className="w-4 h-4" />
                Buat Jadwal Posyandu Baru
              </button>
            </div>
          </div>

          {/* Top Summary Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Sesi Bulan Ini</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full">Aktif</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-extrabold text-slate-900">4</h3>
                <span className="text-xs text-slate-500">Sesi</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-gray-50">4 Pos Layanan (RW 01, RW 02, RW 03, RW 04)</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Target Sasaran</span>
                <span className="text-[10px] bg-sky-50 text-sky-600 font-bold px-2 py-0.5 rounded-full">100% Terdata</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-extrabold text-slate-900">310</h3>
                <span className="text-xs text-slate-500">Balita</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-gray-50">Wilayah Kerja Puskesmas Cilandak</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Kader Bertugas</span>
                <span className="text-[10px] bg-teal-50 text-[#00A896] font-bold px-2 py-0.5 rounded-full">+2 Bidan</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-extrabold text-slate-900">16</h3>
                <span className="text-xs text-slate-500">Kader</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-gray-50">Siap Pelaksanaan 5 Langkah Posyandu</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">WhatsApp Blast Terkirim</span>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 font-bold px-2 py-0.5 rounded-full">97.9%</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-extrabold text-emerald-600">285</h3>
                <span className="text-xs text-slate-500">Undangan</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-gray-50">Gateway Kemenkes Terverifikasi</p>
            </div>
          </div>

          {/* Protokol Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-[#00A896] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#00A896]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">Standar Operasional Kemenkes</span>
                <h4 className="text-sm font-bold mt-0.5">Protokol Penimbangan Balita & Cegah Stunting</h4>
                <p className="text-xs text-slate-300 mt-0.5">Pastikan alat ukur telah dikalibrasi titik nol sebelum dibuka. Hubungi Bidan Desa untuk konfirmasi stok kapsul Vitamin A & paket PMT.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shrink-0">
              Unduh SOP Lengkap
            </button>
          </div>

          {/* Main Grid: Left (Calendar & Agenda) | Right (WhatsApp Gateway & Piket & Logistik) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT 2 COLUMNS: Calendar & Agenda Mendatang */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Kalender Pelayanan Bulan Ini (Mock Visual Clean) */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Kalender Pelayanan Bulan Ini</h3>
                    <p className="text-xs text-slate-500">Jadwal operasional posyandu wilayah RW 04</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 bg-gray-100 px-3 py-1.5 rounded-xl">November 2024</span>
                  </div>
                </div>

                {/* Simple Grid Calendar representation */}
                <div className="grid grid-cols-7 gap-2 text-center text-xs">
                  {['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN'].map((day) => (
                    <span key={day} className="font-bold text-slate-400 py-2">{day}</span>
                  ))}
                  
                  {/* Days mock */}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const dateNum = i + 1;
                    const isSelected = dateNum === 13;
                    const hasSchedule = [13, 15, 18].includes(dateNum);

                    return (
                      <div 
                        key={i} 
                        onClick={() => setSelectedDate(dateNum.toString())}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-between min-h-[70px] cursor-pointer transition-all ${isSelected ? 'border-[#00A896] bg-teal-50/40 shadow-sm' : 'border-gray-100 hover:bg-gray-50'}`}
                      >
                        <span className={`font-semibold ${isSelected ? 'text-[#00A896]' : 'text-slate-700'}`}>{dateNum}</span>
                        {hasSchedule && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${dateNum === 13 ? 'bg-[#00A896] text-white' : 'bg-amber-100 text-amber-700'}`}>
                            {dateNum === 13 ? 'Pos Mawar' : 'Sesi Lain'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detail Agenda Penimbangan Mendatang (Highlighted card) */}
              <div className="bg-white border-2 border-[#00A896]/30 rounded-2xl p-6 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-teal-50 text-[#00A896] font-bold text-[11px] rounded-full border border-teal-100">
                      🟢 SESI BERIKUTNYA &bull; 2 HARI LAGI
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">Terdaftar di SIPe-PPGBM</span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">Posyandu Mawar 04 - Sesi Penimbangan Rutin & Pemberian Vitamin A</h3>
                  <p className="text-xs text-slate-500 mt-1">Fokus intervensi balita bawah garis merah dan pemantauan stunting bulanan.</p>
                </div>

                {/* Grid Detail Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#00A896] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Waktu Pelaksanaan</p>
                      <p className="font-bold text-slate-800 mt-0.5">Rabu, 13 November 2024</p>
                      <p className="text-slate-600">08:30 - 12:00 WIB</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Lokasi Kegiatan</p>
                      <p className="font-bold text-slate-800 mt-0.5">Balai Warga RW 04</p>
                      <p className="text-slate-600">Jl. Kemuning Sukamaju, Cilandak</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Sasaran Kehadiran</p>
                      <p className="font-bold text-slate-800 mt-0.5">65 Balita (Usia 0-59 Bulan)</p>
                      <p className="text-rose-600 font-medium">Prioritas: 8 Balita Indikasi Kurang Gizi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Tim Pendamping Puskesmas</p>
                      <p className="font-bold text-slate-800 mt-0.5">Bidan Desi Anggraeni, A.Md.Keb</p>
                      <p className="text-slate-600">Puskesmas Pembantu Sukamaju</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shadow-sm">
                    <Send className="w-4 h-4" />
                    Kirim WhatsApp Reminder Massal (65)
                  </button>
                  <button className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-semibold rounded-xl transition-all">
                    Cetak Blanko Absensi
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: WhatsApp Gateway, Kader Piket & Logistik */}
            <div className="space-y-6">
              
              {/* WhatsApp Gateway Card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">WhatsApp Gateway</h3>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">
                    Online & Aktif
                  </span>
                </div>

                <p className="text-xs text-slate-500">Pesan resmi tersinkronisasi server Kemenkes RI dengan enkripsi TLS.</p>

                {/* Preview Pesan Kotak */}
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-[11px] text-slate-600 space-y-1 font-mono">
                  <p className="font-bold text-slate-800">PREVIEW PESAN OTOMATIS:</p>
                  <p>&quot;Halo Bunda [Nama_Ibu], mengingatkan jadwal Posyandu Balita an. [Nama_Anak] pada Rabu 13 Nov 2024 jam 08:30 di Balai RW 04. Mohon bawa Buku KIA/KMS. Terima kasih - Kader Posyandu Mawar 04.&quot;</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Validitas Nomor WhatsApp:</span>
                    <span className="font-bold text-emerald-600">62 / 65 Balita (95%)</span>
                  </div>
                </div>

                <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Kirim Blast Notifikasi Sekarang
                </button>
              </div>

              {/* Kader & Nakes Piket */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Kader & Nakes Piket</h3>
                  <span className="text-xs text-[#00A896] font-semibold cursor-pointer hover:underline">Kelola &rarr;</span>
                </div>
                <p className="text-xs text-slate-500">Penugasan meja pelayanan 5 langkah Posyandu Mawar 04 (Rabu, 13 Nov).</p>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-bold text-slate-800">Ibu Siti Rahayu</p>
                      <p className="text-[11px] text-slate-500">Meja 1: Pendaftaran & NIK</p>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-bold text-slate-800">Ibu Nurul Hidayati</p>
                      <p className="text-[11px] text-slate-500">Meja 2: Penimbangan BB/TB</p>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl">
                    <div>
                      <p className="font-bold text-slate-800">Ibu Ratna Wulandari</p>
                      <p className="text-[11px] text-slate-500">Meja 3: Pencatatan Buku KIA</p>
                    </div>
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">✓</span>
                  </div>
                </div>
              </div>

              {/* Logistik & Suplemen */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900">Logistik & Suplemen</h3>
                  <span className="text-xs text-[#00A896] font-semibold cursor-pointer hover:underline">Lengkap</span>
                </div>
                <p className="text-xs text-slate-500">Kesiapan paket intervensi nutrisi dan obat Puskesmas Cilandak.</p>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-slate-700">Kapsul Vitamin A Merah (100K IU)</span>
                    <span className="font-bold text-emerald-600">80 pcs (Cukup)</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-slate-700">Paket PMT Pangan Lokal (Telur & Ikan)</span>
                    <span className="font-bold text-emerald-600">65 box</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <span className="text-slate-700">Form Rujukan Klinis Stunting</span>
                    <span className="font-bold text-slate-700">25 lbr</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}