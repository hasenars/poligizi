import React from 'react';
import { 
  Users, 
  UserPlus, 
  PlusCircle, 
  Calendar, 
  Download 
} from 'lucide-react';

export default function SidebarKader() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col justify-between p-4 min-h-screen">
      <div>
        <div className="flex items-center gap-2 px-2 py-4 mb-4 border-b border-slate-100">
          <div className="w-8 h-8 rounded-lg bg-[#00A896] flex items-center text-white font-bold justify-center">PG</div>
          <div>
            <h1 className="font-bold text-sm leading-tight text-[#1E293B]">Tumbuh Sehat</h1>
            <p className="text-xs text-slate-500">Kemenkes RI Posyandu</p>
          </div>
        </div>

        <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase px-2 mb-2">Menu Layanan</p>
        <nav className="space-y-1">
          <a href="/kader/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#00A896] text-white text-sm font-medium">
            <Users className="w-4 h-4" /> Dashboard Utama
          </a>
          <a href="/kader/data-balita" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
            <UserPlus className="w-4 h-4" /> Pertumbuhan & Riwayat
          </a>
          <a href="/kader/penimbangan" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
            <PlusCircle className="w-4 h-4" /> Manajemen Data & Input
          </a>
          <a href="/kader/jadwal" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
            <Calendar className="w-4 h-4" /> Jadwal Penimbangan
          </a>
          <a href="/kader/laporan" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:bg-slate-50 text-sm font-medium">
            <Download className="w-4 h-4" /> Laporan Kemenkes
          </a>
        </nav>
      </div>

      {/* Profil Puskesmas Mitra di bawah */}
      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-xs font-medium text-slate-600">Puskesmas Mitra Kec. Cilandak</span>
        </div>
      </div>
    </aside>
  );
}