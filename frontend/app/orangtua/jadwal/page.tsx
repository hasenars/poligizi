"use client";

import { useState } from "react";
import {
  Bell,
  BellRing,
  BookOpen,
  CalendarCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Scale,
  Syringe,
  UsersRound,
} from "lucide-react";
import SidebarOrangTua from "@/components/SidebarOrangTua";
import type { Balita, User } from "@/types";

interface ChildProfile {
  balita: Balita;
  usiaLabel: string;
  jenisKelaminLabel: string;
}

interface PosyanduSchedule {
  id: string;
  date: string;
  weekday: string;
  time: string;
  title: string;
  location: string;
  address: string;
  services: string[];
  preparation: string;
  status: "Mendatang" | "Terjadwal";
  highlight?: boolean;
}

interface AttendanceRecord {
  id: string;
  date: string;
  title: string;
  location: string;
  status: "Hadir" | "Terjadwal";
  note: string;
}

const parent: User = {
  id: "ortu-001",
  nama: "Ibu Siti Aminah",
  email: "siti.aminah@example.com",
  role: "orangtua",
  posyandu: "Posyandu Melati 02",
};

const children: ChildProfile[] = [
  {
    balita: {
      id: "balita-001",
      nik: "3374011503250001",
      nama: "Arka Pratama",
      jenisKelamin: "L",
      tglLahir: "2025-05-13",
      namaOrangTua: parent.nama,
      posyandu: "Posyandu Melati 02",
    },
    usiaLabel: "18 Bulan",
    jenisKelaminLabel: "Laki-laki",
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
    },
    usiaLabel: "34 Bulan",
    jenisKelaminLabel: "Perempuan",
  },
];

const schedules: PosyanduSchedule[] = [
  {
    id: "jadwal-nov-2026",
    date: "21 November 2026",
    weekday: "Sabtu",
    time: "08.00–11.00 WIB",
    title: "Penimbangan Bulanan & Imunisasi",
    location: "Posyandu Melati 02",
    address: "Balai RW 04, Kelurahan Tlogosari Kulon, Semarang",
    services: [
      "Penimbangan berat badan",
      "Pengukuran tinggi/panjang badan",
      "Pengukuran lingkar kepala & LiLA",
      "Konseling gizi",
      "Imunisasi sesuai jadwal",
      "Pemberian PMT",
    ],
    preparation:
      "Bawa Buku KIA dan pastikan anak sudah sarapan. Siapkan catatan pertanyaan untuk kader.",
    status: "Mendatang",
    highlight: true,
  },
  {
    id: "jadwal-des-2026",
    date: "19 Desember 2026",
    weekday: "Sabtu",
    time: "08.00–11.00 WIB",
    title: "Penimbangan Bulanan & Konseling",
    location: "Posyandu Melati 02",
    address: "Balai RW 04, Kelurahan Tlogosari Kulon, Semarang",
    services: [
      "Penimbangan berat badan",
      "Pengukuran tinggi/panjang badan",
      "Pengukuran lingkar kepala & LiLA",
      "Konseling gizi",
      "Pemberian PMT",
    ],
    preparation:
      "Bawa Buku KIA dan pakaian yang nyaman agar pengukuran lebih mudah.",
    status: "Mendatang",
  },
  {
    id: "jadwal-jan-2027",
    date: "16 Januari 2027",
    weekday: "Sabtu",
    time: "08.00–11.00 WIB",
    title: "Penimbangan Bulanan & Edukasi Gizi",
    location: "Posyandu Melati 02",
    address: "Balai RW 04, Kelurahan Tlogosari Kulon, Semarang",
    services: [
      "Penimbangan berat badan",
      "Pengukuran tinggi/panjang badan",
      "Pengukuran lingkar kepala & LiLA",
      "Konseling gizi",
      "Pemberian PMT",
    ],
    preparation:
      "Bawa Buku KIA. Kader akan mengadakan edukasi menu sehat untuk balita.",
    status: "Mendatang",
  },
];

const attendance: AttendanceRecord[] = [
  {
    id: "hadir-nov",
    date: "7 November 2026",
    title: "Penimbangan Bulanan",
    location: "Posyandu Melati 02",
    status: "Hadir",
    note: "Pengukuran berat badan dan tinggi badan selesai.",
  },
  {
    id: "hadir-okt",
    date: "7 Oktober 2026",
    title: "Penimbangan & Konseling Gizi",
    location: "Posyandu Melati 02",
    status: "Hadir",
    note: "Konseling menu MPASI dan pemantauan pertumbuhan.",
  },
  {
    id: "hadir-sep",
    date: "7 September 2026",
    title: "Penimbangan Bulanan",
    location: "Posyandu Melati 02",
    status: "Hadir",
    note: "Pengukuran antropometri tercatat di Buku KIA.",
  },
  {
    id: "terjadwal-nov",
    date: "21 November 2026",
    title: "Penimbangan Bulanan & Imunisasi",
    location: "Posyandu Melati 02",
    status: "Terjadwal",
    note: "Jadwal berikutnya — Balai RW 04.",
  },
];

function ScheduleCard({ schedule }: { schedule: PosyanduSchedule }) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#008f80]">
            <CalendarDays aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-slate-900">{schedule.title}</h3>
              <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-teal-700">
                {schedule.status}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[#008f80]">
              {schedule.weekday}, {schedule.date}
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <Clock3 aria-hidden="true" className="h-3.5 w-3.5" />
              {schedule.time}
            </p>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 sm:justify-end">
            <MapPin aria-hidden="true" className="h-4 w-4 text-[#008f80]" />
            {schedule.location}
          </p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            {schedule.address}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Layanan tersedia
          </p>
          <ul className="mt-2 grid gap-2">
            {schedule.services.map((service) => (
              <li
                className="flex items-center gap-2 text-sm text-slate-600"
                key={service}
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#00A896]"
                />
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl bg-amber-50/80 p-4">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-800">
            <BookOpen aria-hidden="true" className="h-4 w-4" />
            Persiapan orang tua
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-900/80">
            {schedule.preparation}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function JadwalOrangTuaPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");
  const [selectedChildId, setSelectedChildId] = useState(children[0].balita.id);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isReminderSet, setIsReminderSet] = useState(false);

  const selectedChild =
    children.find(({ balita }) => balita.id === selectedChildId) ?? children[0];
  const featuredSchedule = schedules[0];
  const upcomingSchedules = schedules.slice(1);

  return (
    <>
      <SidebarOrangTua user={parent} />
      <main className="min-h-screen bg-[#f5f9f8] pb-24 text-slate-800 lg:ml-72 lg:pb-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
          <header className="mb-7 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-[#008f80]">
                Posyandu Melati 02 · Tlogosari Kulon
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Jadwal & kegiatan Posyandu
              </h1>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Atur kunjungan dan lihat layanan untuk tumbuh kembang si kecil.
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

          <div
            aria-label="Filter jadwal"
            className="mb-6 flex w-full max-w-md gap-1 rounded-2xl border border-slate-100 bg-white p-1.5 shadow-sm"
            role="tablist"
          >
            <button
              aria-selected={activeTab === "upcoming"}
              className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold transition ${
                activeTab === "upcoming"
                  ? "bg-[#00A896]/10 text-[#008f80]"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
              onClick={() => setActiveTab("upcoming")}
              role="tab"
              type="button"
            >
              <CalendarDays aria-hidden="true" className="h-4 w-4" />
              Jadwal Mendatang
            </button>
            <button
              aria-selected={activeTab === "history"}
              className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-3 text-sm font-semibold transition ${
                activeTab === "history"
                  ? "bg-[#00A896]/10 text-[#008f80]"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
              onClick={() => setActiveTab("history")}
              role="tab"
              type="button"
            >
              <UsersRound aria-hidden="true" className="h-4 w-4" />
              Riwayat Kehadiran
            </button>
          </div>

          {activeTab === "upcoming" ? (
            <div aria-label="Jadwal mendatang" role="tabpanel">
              <section className="mb-7 overflow-hidden rounded-3xl bg-gradient-to-br from-[#00A896] to-[#078f83] p-5 text-white shadow-sm sm:p-7">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-semibold">
                      <CalendarCheck
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                      Jadwal terdekat · {selectedChild.balita.nama}
                    </span>
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {featuredSchedule.title}
                    </h2>
                    <p className="mt-2 text-sm text-teal-50 sm:text-base">
                      {featuredSchedule.weekday},{" "}
                      {featuredSchedule.date} · {featuredSchedule.time}
                    </p>

                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4">
                      <MapPin
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-teal-100"
                      />
                      <div>
                        <p className="font-semibold">
                          {featuredSchedule.location}
                        </p>
                        <p className="mt-1 text-sm leading-5 text-teal-50">
                          {featuredSchedule.address}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                        <Scale aria-hidden="true" className="h-3.5 w-3.5" />
                        Penimbangan Bulanan
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                        <Syringe aria-hidden="true" className="h-3.5 w-3.5" />
                        Imunisasi
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium">
                        <CalendarCheck
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                        Pemberian Vitamin A
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 lg:max-w-xs">
                    <p className="text-sm font-semibold">
                      Siapkan kunjungan Anda
                    </p>
                    <button
                      aria-pressed={isConfirmed}
                      className={`flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                        isConfirmed
                          ? "bg-white/20 text-white hover:bg-white/25"
                          : "bg-white text-[#007f72] hover:bg-teal-50"
                      }`}
                      onClick={() => setIsConfirmed((confirmed) => !confirmed)}
                      type="button"
                    >
                      {isConfirmed ? (
                        <Check aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        <CalendarCheck
                          aria-hidden="true"
                          className="h-4 w-4"
                        />
                      )}
                      {isConfirmed ? "Kehadiran dikonfirmasi" : "Konfirmasi Hadir"}
                    </button>
                    <button
                      aria-pressed={isReminderSet}
                      className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/35 px-4 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      onClick={() =>
                        setIsReminderSet((isSet) => !isSet)
                      }
                      type="button"
                    >
                      {isReminderSet ? (
                        <BellRing aria-hidden="true" className="h-4 w-4" />
                      ) : (
                        <Bell aria-hidden="true" className="h-4 w-4" />
                      )}
                      {isReminderSet ? "Pengingat dipasang" : "Pasang Pengingat"}
                    </button>
                    {isReminderSet ? (
                      <p className="text-center text-xs text-teal-50">
                        Pengingat demo aktif untuk jadwal ini.
                      </p>
                    ) : null}
                  </div>
                </div>
              </section>

              <section aria-labelledby="schedule-list-heading">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                      Catat tanggalnya
                    </p>
                    <h2
                      className="mt-1 text-lg font-bold text-slate-900"
                      id="schedule-list-heading"
                    >
                      Jadwal kegiatan berikutnya
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">
                    {upcomingSchedules.length + 1} jadwal tersedia
                  </span>
                </div>
                <div className="space-y-4">
                  {upcomingSchedules.map((schedule) => (
                    <ScheduleCard key={schedule.id} schedule={schedule} />
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <section
              aria-label="Riwayat kehadiran"
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
              role="tabpanel"
            >
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#008f80]">
                  Catatan kunjungan
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  Riwayat kehadiran anak
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Kunjungan Posyandu untuk {selectedChild.balita.nama}
                </p>
              </div>

              <div className="divide-y divide-slate-100">
                {attendance.map((record) => (
                  <article
                    className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                    key={record.id}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          record.status === "Hadir"
                            ? "bg-green-50 text-green-700"
                            : "bg-teal-50 text-[#008f80]"
                        }`}
                      >
                        {record.status === "Hadir" ? (
                          <CheckCircle2
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        ) : (
                          <CalendarDays
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        )}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold text-slate-900">
                            {record.title}
                          </h3>
                          <span
                            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                              record.status === "Hadir"
                                ? "border-green-200 bg-green-50 text-green-700"
                                : "border-teal-200 bg-teal-50 text-teal-700"
                            }`}
                          >
                            {record.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">
                          Ananda {selectedChild.balita.nama}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {record.note}
                        </p>
                      </div>
                    </div>
                    <div className="pl-[3.25rem] text-left sm:pl-0 sm:text-right">
                      <p className="text-sm font-semibold text-slate-700">
                        {record.date}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500 sm:justify-end">
                        <MapPin
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                        {record.location}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
