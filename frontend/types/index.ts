// frontend/types/index.ts

export type StatusGizi = 'normal' | 'stunting' | 'wasting' | 'underweight' | 'overweight';
export type RoleUser = 'kader' | 'orangtua' | 'admin';

export interface User {
  id: string;
  nama: string;
  email: string;
  role: RoleUser;
  posyandu?: string;
}

export interface Balita {
  id: string;
  nik: string;
  nama: string;
  jenisKelamin: 'L' | 'P';
  tglLahir: string;
  namaOrangTua: string;
  posyandu: string;
  bbTerakhir?: number;
  tbTerakhir?: number;
  statusGiziTerakhir?: StatusGizi;
}

export interface CatatanPenimbangan {
  id: string;
  balitaId: string;
  tglTimbang: string;
  umurBulan: number;
  bb: number; // kg
  tb: number; // cm
  lk?: number; // lingkar kepala (cm)
  lila?: number; // lingkar lengan atas (cm)
  zscoreTbu?: number;
  zscoreBbu?: number;
  zscoreBbtb?: number;
  statusGizi: StatusGizi;
  catatanKader?: string;
}