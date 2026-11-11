'use client';

import React, { useState } from 'react';
import { 
  Users, 
  PlusCircle, 
  Search, 
  Eye, 
  Edit3, 
  Trash2, 
  Download, 
  X, 
  Baby, 
  Calendar, 
  MapPin, 
  User, 
  Activity, 
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';
import { SidebarKader } from '@/components/SidebarKader';
import { BadgeStatus } from '@/components/ui/Badge';
import { StatusGizi } from '@/types';

// Dummy Data Balita
const initialBalitaList = [
  {
    id: '1',
    nik: '3271038491020001',
    nama: 'Muhammad Bilal Al-Fatih',
    gender: 'L',
    tglLahir: '12 Okt 2022',
    usia: '24 Bln',
    namaIbu: 'Ny. Rahmawati',
    nikIbu: '3271035510880002',
    rtRw: 'RT 02 / RW 04',
    bbTerakhir: '9.80 kg',
    tbTerakhir: '80.5 cm',
    lilaTerakhir: '12.8 cm',
    tglTimbangTerakhir: '12 Okt 2024',
    status: 'stunting' as StatusGizi,
  },
  {
    id: '2',
    nik: '3271035512210003',
    nama: 'Aisyah Putri Azzahra',
    gender: 'P',
    tglLahir: '15 Apr 2023',
    usia: '18 Bln',
    namaIbu: 'Ny. Nurul Hidayah',
    nikIbu: '3271036204900001',
    rtRw: 'RT 01 / RW 04',
    bbTerakhir: '10.20 kg',
    tbTerakhir: '82.0 cm',
    lilaTerakhir: '14.5 cm',
    tglTimbangTerakhir: '12 Okt 2024',
    status: 'normal' as StatusGizi,
  },
  {
    id: '3',
    nik: '3271031908220005',
    nama: 'Kenzo Alvaro Daniswara',
    gender: 'L',
    tglLahir: '10 Agt 2022',
    usia: '26 Bln',
    namaIbu: 'Ny. Dian Kusuma',
    nikIbu: '3271034109890004',
    rtRw: 'RT 03 / RW 04',
    bbTerakhir: '10.50 kg',
    tbTerakhir: '86.2 cm',
    lilaTerakhir: '13.0 cm',
    tglTimbangTerakhir: '10 Okt 2024',
    status: 'underweight' as StatusGizi,
  },
  {
    id: '4',
    nik: '3271034403230002',
    nama: 'Nathania Queensha',
    gender: 'P',
    tglLahir: '03 Mar 2023',
    usia: '19 Bln',
    namaIbu: 'Ny. Erna Susanti',
    nikIbu: '3271035212910003',
    rtRw: 'RT 01 / RW 04',
    bbTerakhir: '13.40 kg',
    tbTerakhir: '81.0 cm',
    lilaTerakhir: '16.2 cm',
    tglTimbangTerakhir: '08 Okt 2024',
    status: 'overweight' as StatusGizi,
  },
  {
    id: '5',
    nik: '3271032101230007',
    nama: 'Bagas Satria Wardhana',
    gender: 'L',
    tglLahir: '21 Jan 2023',
    usia: '21 Bln',
    namaIbu: 'Ny. Wulan Safitri',
    nikIbu: '3271034805920005',
    rtRw: 'RT 02 / RW 04',
    bbTerakhir: '11.60 kg',
    tbTerakhir: '85.0 cm',
    lilaTerakhir: '15.0 cm',
    tglTimbangTerakhir: '05 Okt 2024',
    status: 'normal' as StatusGizi,
  },
];

export default function DataBalitaKaderPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBalita, setSelectedBalita] = useState<typeof initialBalitaList[0] | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTabDetail, setActiveTabDetail] = useState<'profil' | 'histori'>('profil');

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
            <span className="text-slate-800 font-semibold">Master Data Balita</span>
          </div>
          <div className="text-xs bg-teal-50 text-[#00A896] px-3 py-1 rounded-full font-semibold border border-teal-100">
            Kader: Ibu Siti Rahayu
          </div>
        </header>

        <div className="p-8 space-y-6">
          
          {/* Header Action */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Data Balita Terdaftar</h1>
              <p className="text-xs text-slate-500 mt-1">
                Kelola informasi master data anak dan lihat riwayat tumbuh kembang balita di wilayah Posyandu Mawar 04.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 text-xs font-semibold rounded-xl transition-all shadow-sm">
                <Download className="w-4 h-4 text-slate-500" />
                Ekspor Excel
              </button>
              
              <button 
                onClick={() => setIsAddModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#00A896] hover:bg-[#008f80] text-white text-xs font-semibold rounded-xl transition-all shadow-sm shadow-[#00A896]/20"
              >
                <PlusCircle className="w-4 h-4" />
                Tambah Balita Baru
              </button>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Balita Terdaftar</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">128 <span className="text-xs font-normal text-slate-500">Anak</span></h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-[#00A896] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Laki-Laki / Perempuan</p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">65 <span className="text-xs font-normal text-slate-500">L</span> / 63 <span className="text-xs font-normal text-slate-500">P</span></h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Baby className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Balita Butuh Intervensi</p>
                <h3 className="text-2xl font-extrabold text-rose-600 mt-1">18 <span className="text-xs font-normal text-slate-500">Anak</span></h3>
              </div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Main Table Container */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-4">
            
            {/* Search & Filter Toolbar */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari NIK / Nama Balita / Nama Ibu..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#00A896] transition-colors"
                />
              </div>
              <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-slate-600 focus:outline-none focus:border-[#00A896]">
                <option>Semua Status Gizi</option>
                <option>Normal</option>
                <option>Stunting</option>
                <option>Wasting</option>
                <option>Underweight</option>
                <option>Overweight</option>
              </select>
              <select className="px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-slate-600 focus:outline-none focus:border-[#00A896]">
                <option>Semua RT/RW</option>
                <option>RT 01 / RW 04</option>
                <option>RT 02 / RW 04</option>
                <option>RT 03 / RW 04</option>
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-gray-50/50">
                    <th className="py-3 px-4">Nama Balita & NIK</th>
                    <th className="py-3 px-4">Usia</th>
                    <th className="py-3 px-4">Orang Tua (Ibu)</th>
                    <th className="py-3 px-4">Wilayah</th>
                    <th className="py-3 px-4">Pengukuran Terakhir</th>
                    <th className="py-3 px-4">Status Gizi</th>
                    <th className="py-3 px-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50 text-xs">
                  {initialBalitaList.map((item) => (
                    <tr key={item.id} className="hover:bg-teal-50/20 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full font-bold text-[10px] flex items-center justify-center shrink-0 ${item.gender === 'L' ? 'bg-sky-100 text-sky-700' : 'bg-pink-100 text-pink-700'}`}>
                            {item.gender}
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">{item.nama}</p>
                            <p className="text-[11px] text-slate-400 font-mono">{item.nik}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-700">{item.usia}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.namaIbu}</td>
                      <td className="py-3.5 px-4 text-slate-600">{item.rtRw}</td>
                      <td className="py-3.5 px-4">
                        <p className="font-semibold text-slate-800">{item.bbTerakhir} &bull; {item.tbTerakhir}</p>
                        <p className="text-[11px] text-slate-400">{item.tglTimbangTerakhir}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <BadgeStatus status={item.status} />
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center justify-center gap-1.5">
                          <button 
                            onClick={() => setSelectedBalita(item)}
                            title="Lihat Detail & Riwayat" 
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-teal-50 hover:bg-teal-100 text-[#00A896] font-semibold text-[11px] rounded-lg transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Detail
                          </button>
                          <button title="Edit Data" className="p-1.5 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button title="Hapus Data" className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
              <span>Menampilkan 1-5 dari 128 data balita</span>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50">Sebelumnya</button>
                <span className="font-bold text-slate-700">1 / 26</span>
                <button className="px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">Selanjutnya</button>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* ========================================================================= */}
      {/* MODAL 1: DETAIL BALITA & RIWAYAT PENIMBANGAN                             */}
      {/* ========================================================================= */}
      {selectedBalita && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#00A896] text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full font-extrabold text-sm flex items-center justify-center ${selectedBalita.gender === 'L' ? 'bg-sky-100 text-sky-700' : 'bg-pink-100 text-pink-700'}`}>
                  {selectedBalita.gender}
                </div>
                <div>
                  <h3 className="font-bold text-base">{selectedBalita.nama}</h3>
                  <p className="text-xs text-teal-100 font-mono">NIK: {selectedBalita.nik}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedBalita(null)}
                className="p-1.5 text-teal-100 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-gray-100 bg-gray-50 px-6 text-xs font-semibold text-slate-500">
              <button 
                onClick={() => setActiveTabDetail('profil')}
                className={`py-3 px-4 border-b-2 transition-all ${activeTabDetail === 'profil' ? 'border-[#00A896] text-[#00A896] bg-white font-bold' : 'hover:text-slate-700'}`}
              >
                Informasi Identitas & Ortu
              </button>
              <button 
                onClick={() => setActiveTabDetail('histori')}
                className={`py-3 px-4 border-b-2 transition-all ${activeTabDetail === 'histori' ? 'border-[#00A896] text-[#00A896] bg-white font-bold' : 'hover:text-slate-700'}`}
              >
                Histori Pengukuran Balita
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs">
              
              {activeTabDetail === 'profil' ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <p className="text-slate-400 font-medium">Tanggal Lahir</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedBalita.tglLahir} ({selectedBalita.usia})</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Jenis Kelamin</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedBalita.gender === 'L' ? 'Laki-Laki' : 'Perempuan'}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Nama Ibu Kandung</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedBalita.namaIbu}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">NIK Ibu</p>
                      <p className="font-mono font-semibold text-slate-800 mt-0.5">{selectedBalita.nikIbu}</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Wilayah Domisili</p>
                      <p className="font-bold text-slate-800 mt-0.5">{selectedBalita.rtRw}, Posyandu Mawar 04</p>
                    </div>
                    <div>
                      <p className="text-slate-400 font-medium">Status Gizi Terkini</p>
                      <div className="mt-1">
                        <BadgeStatus status={selectedBalita.status} />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="font-bold text-slate-800">Riwayat Catatan Penimbangan</p>
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-[10px] font-bold text-slate-400 uppercase">
                        <th className="py-2">Tanggal</th>
                        <th className="py-2">Usia</th>
                        <th className="py-2">BB</th>
                        <th className="py-2">TB</th>
                        <th className="py-2">LiLA</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      <tr>
                        <td className="py-2 text-slate-600">12 Okt 2024</td>
                        <td className="py-2 font-medium">24 Bln</td>
                        <td className="py-2 font-bold text-slate-800">9.80 kg</td>
                        <td className="py-2 font-bold text-slate-800">80.5 cm</td>
                        <td className="py-2 text-slate-600">12.8 cm</td>
                        <td className="py-2"><BadgeStatus status={selectedBalita.status} /></td>
                      </tr>
                      <tr>
                        <td className="py-2 text-slate-600">10 Sep 2024</td>
                        <td className="py-2 font-medium">23 Bln</td>
                        <td className="py-2 font-bold text-slate-800">9.75 kg</td>
                        <td className="py-2 font-bold text-slate-800">79.8 cm</td>
                        <td className="py-2 text-slate-600">12.7 cm</td>
                        <td className="py-2"><BadgeStatus status="stunting" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button 
                onClick={() => setSelectedBalita(null)}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: REGISTRASI BALITA BARU                                          */}
      {/* ========================================================================= */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            <div className="bg-[#00A896] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="font-bold text-base">Registrasi Data Balita Baru</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-teal-100 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form className="p-6 space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">NIK Balita (16 Digit)</label>
                <input type="text" placeholder="Masukkan 16 digit NIK balita" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]" />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Nama Lengkap Balita</label>
                <input type="text" placeholder="Nama lengkap balita" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Jenis Kelamin</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]">
                    <option>Laki-Laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Tanggal Lahir</label>
                  <input type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Nama Ibu Kandung</label>
                  <input type="text" placeholder="Nama Ibu" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]" />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Wilayah (RT/RW)</label>
                  <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00A896]">
                    <option>RT 01 / RW 04</option>
                    <option>RT 02 / RW 04</option>
                    <option>RT 03 / RW 04</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-2 border-t border-gray-100">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 bg-gray-100 text-slate-700 rounded-xl font-semibold">Batal</button>
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="px-4 py-2 bg-[#00A896] text-white rounded-xl font-semibold shadow-sm">Simpan Data Balita</button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}