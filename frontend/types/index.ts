export type StatusGizi = 'normal' | 'stunting' | 'wasting' | 'underweight' | 'overweight';
 
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
  lk?: number; // cm
  lila?: number; // cm
  zscoreTbu?: number;
  zscoreBbu?: number;
  zscoreBbtb?: number;
  statusGizi: StatusGizi;
  catatanKader?: string;
}
