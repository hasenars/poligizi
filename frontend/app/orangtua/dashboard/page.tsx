"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  CalendarDays,
  ChevronDown,
  CircleCheck,
  Clock3,
  Heart,
  Ruler,
  Scale,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import SidebarOrangTua from "@/components/SidebarOrangTua";
import type { Balita, CatatanPenimbangan, User } from "@/types";

interface ChildDashboardData {
  balita: Balita;
  usia: string;
  jenisKelaminLabel: string;
  pengukuranTerakhir: CatatanPenimbangan;
  tanggalPengukuran: string;
  statusLabel: string;
  catatanKader: string;
  rekomendasi: string;
}

const parent: User = {
  id: "ortu-001",
  nama: "Ibu Siti Aminah",
  email: "siti.aminah@example.com",
  role: "orangtua",
  posyandu: "Posyandu Melati 02",
};

const children: ChildDashboardData[] = [
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
    usia: "18 Bulan",
    jenisKelaminLabel: "Laki-laki",
    pengukuranTerakhir: {
      id: "timbang-001",
      balitaId: "balita-001",
      tglTimbang: "2026-11-07",
      umurBulan: 18,
      bb: 10.8,
      tb: 79.5,
      lk: 47,
      lila: 15,
      zscoreTbu: -0.3,
      zscoreBbu: -0.2,
      zscoreBbtb: 0.1,
      statusGizi: "normal",
      catatanKader: "Pertumbuhan Arka sesuai kurva. Pertahankan pola makan beragam.",
    },
    tanggalPengukuran: "7 November 2026",
    statusLabel: "Gizi Baik / Normal",
    catatanKader:
      "Pertumbuhan Arka sesuai kurva. Pertahankan pola makan beragam dan datang kembali sesuai jadwal.",
    rekomendasi:
      "Sajikan makanan keluarga dengan tekstur yang sesuai usia, sumber protein hewani setiap hari, serta buah dan sayur. Lanjutkan ASI hingga usia 2 tahun.",
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
    usia: "34 Bulan",
    jenisKelaminLabel: "Perempuan",
    pengukuranTerakhir: {
      id: "timbang-002",
      balitaId: "balita-002",
      tglTimbang: "2026-11-07",
      umurBulan: 34,
      bb: 12.1,
      tb: 88,
      lk: 48,
      lila: 15.5,
      zscoreTbu: -0.5,
      zscoreBbu: -0.4,
      zscoreBbtb: 0,
      statusGizi: "normal",
      catatanKader: "Naya tumbuh dengan baik. Terus stimulasi aktif dan bermain bersama.",
    },
    tanggalPengukuran: "7 November 2026",
    statusLabel: "Gizi Baik / Normal",
    catatanKader:
      "Naya tumbuh dengan baik. Terus stimulasi aktif melalui bermain dan ajak Naya mencoba variasi makanan sehat.",
    rekomendasi:
      "Pertahankan jadwal makan teratur dengan lauk berprotein, sayur, dan buah. Ajak Naya aktif bergerak dan bermain setiap hari.",
  },
];

const measurementCards = [
  {
    label: "Berat Badan",
    key: "bb",
    unit: "kg",
    icon: Scale,
    style: "bg-teal-50 text-[#008f80]",
  },
  {
    label: "Tinggi Badan",
    key: "tb",
    unit: "cm",
    icon: Ruler,
    style: "bg-sky-50 text-sky-700",
  },
  {
    label: "Lingkar Kepala",
    key: "lk",
    unit: "cm",
    icon: Baby,
    style: "bg-violet-50 text-violet-700",
  },
  {
    label: "Lingkar Lengan",
    key: "lila",
    unit: "cm",
    icon: Heart,
    style: "bg-amber-50 text-amber-700",
  },
] as const;

export default function OrangTuaDashboardPage() {
  const [selectedChildId, setSelectedChildId] = useState(children[0].balita.id);
  const selectedChild =
    children.find(({ balita }) => balita.id === selectedChildId) ?? children[0];
  const { pengukuranTerakhir: measurement } = selectedChild;

  return (
    <>
      <SidebarOrangTua user={parent} />
      <main className="min-h-screen bg-[#f5f9f8] pb-24 text-slate-800 lg:ml-72 lg:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
          <header className="mb-7 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-[#008f80]">
                Jumat, 13 November 2026
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Selamat pagi, Ibu Siti
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Yuk, pantau tumbuh kembang si kecil hari ini.
              </p>
            </div>

            <label className="relative block w-full sm:max-w-xs">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                Profil anak
              </span>
              <select
                aria-label="Pilih profil anak"
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-4 pr-11 text-sm font-medium text-slate-700 shadow-sm outline-none transition focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                onChange={(event) => setSelectedChildId(event.target.value)}
                value={selectedChildId}
              >
                {children.map(({ balita, usia, jenisKelaminLabel }) => (
                  <option key={balita.id} value={balita.id}>
                    Ananda {balita.nama} - {usia}, {jenisKelaminLabel}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3.5 right-4 h-4 w-4 text-slate-400"
              />
            </label>
          </header>

          <section className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00A896] to-[#078f83] p-5 text-white shadow-sm sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <Baby aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-teal-50">Ringkasan tumbuh kembang</p>
                  <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                    Ananda {selectedChild.balita.nama}
                  </h2>
                  <p className="mt-1 text-sm text-teal-50">
                    {selectedChild.usia} · {selectedChild.jenisKelaminLabel}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-sm font-semibold sm:self-center">
                <CircleCheck aria-hidden="true" className="h-4 w-4" />
                {selectedChild.statusLabel}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 border-t border-white/20 pt-4 text-sm text-teal-50">
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              Pengukuran terakhir
              <span className="font-semibold text-white">
                {selectedChild.tanggalPengukuran}
              </span>
            </div>
          </section>

          <section aria-labelledby="measurement-heading" className="mb-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2
                  className="text-lg font-bold tracking-tight text-slate-900"
                  id="measurement-heading"
                >
                  Hasil penimbangan terakhir
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Catatan pengukuran di Posyandu Melati 02
                </p>
              </div>
              <span className="text-xs font-medium text-slate-400">
                Usia saat ukur: {measurement.umurBulan} bulan
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {measurementCards.map(({ label, key, unit, icon: Icon, style }) => (
                <article
                  className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm sm:p-5"
                  key={key}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${style}`}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <span className="text-right text-xs font-medium text-slate-400">
                      {label}
                    </span>
                  </div>
                  <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                    {measurement[key] ?? "—"}
                    <span className="ml-1 text-sm font-medium text-slate-500">
                      {unit}
                    </span>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#008f80]">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                    Catatan kader & rekomendasi
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    Terus jaga kebiasaan baik, ya!
                  </h2>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <Stethoscope
                    aria-hidden="true"
                    className="h-4 w-4 text-[#008f80]"
                  />
                  Catatan kader
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {selectedChild.catatanKader}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {selectedChild.rekomendasi}
              </p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[#00A896]/25 px-4 py-2 text-sm font-semibold text-[#008f80] transition hover:bg-[#00A896]/5"
                href="/orangtua/kurva-riwayat"
              >
                Lihat kurva & riwayat
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                    Jangan lupa
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    Jadwal Posyandu
                  </h2>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                  <CalendarDays aria-hidden="true" className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-5 rounded-xl border border-teal-100 bg-teal-50/70 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#007f72]">
                  <Clock3 aria-hidden="true" className="h-4 w-4" />
                  8 hari lagi
                </div>
                <p className="mt-2 text-xl font-bold text-slate-900">
                  Sabtu, 21 November 2026
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Pukul 08.00–11.00 WIB
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Lokasi
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  Posyandu Melati 02
                </p>
                <p className="mt-1 text-sm leading-5 text-slate-500">
                  Balai RW 04, Kelurahan Tlogosari Kulon
                </p>
              </div>

              <Link
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl px-1 py-2 text-sm font-semibold text-[#008f80] transition hover:text-[#006f64]"
                href="/orangtua/jadwal"
              >
                Lihat semua jadwal
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
