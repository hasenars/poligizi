import Link from "next/link";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Baby,
  BellRing,
  BookOpenCheck,
  BrainCircuit,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  HeartPulse,
  LineChart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
} from "lucide-react";

const features = [
  {
    icon: LineChart,
    number: "01",
    title: "KMS Digital & Kurva WHO",
    description:
      "Catatan pertumbuhan tersimpan rapi. Lihat perubahan berat dan tinggi anak melalui kurva yang mudah dipahami.",
    iconStyle: "bg-teal-50 text-[#008f80]",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "Analisis status gizi",
    description:
      "Dukung pemantauan status gizi dengan analisis berbasis machine learning dan acuan standar pertumbuhan WHO.",
    iconStyle: "bg-sky-50 text-sky-700",
  },
  {
    icon: BellRing,
    number: "03",
    title: "Jadwal & pengingat Posyandu",
    description:
      "Ketahui jadwal kegiatan, layanan yang tersedia, dan persiapan sebelum datang ke Posyandu.",
    iconStyle: "bg-amber-50 text-amber-700",
  },
  {
    icon: ClipboardList,
    number: "04",
    title: "Rekap digital terhubung",
    description:
      "Bantu kader dan tenaga kesehatan mengelola catatan pengukuran serta memantau tindak lanjut.",
    iconStyle: "bg-violet-50 text-violet-700",
  },
];

const steps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Ukur di Posyandu",
    description:
      "Kader mencatat berat, tinggi badan, dan pengukuran lain saat kunjungan rutin.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Pantau hasilnya",
    description:
      "Data membantu pemantauan pertumbuhan dengan acuan WHO dan analisis berbasis ML.",
  },
  {
    number: "03",
    icon: HeartPulse,
    title: "Dampingi tumbuh kembang",
    description:
      "Orang tua melihat kurva, rekomendasi, dan jadwal Posyandu dalam satu tempat.",
  },
];

const roles = [
  {
    icon: Baby,
    title: "Orang Tua Balita",
    description:
      "Pantau pertumbuhan anak, baca rekomendasi, dan jangan lewatkan jadwal Posyandu.",
    link: "/register",
    action: "Daftar sebagai orang tua",
    style: "bg-teal-50 text-[#008f80]",
  },
  {
    icon: UsersRound,
    title: "Kader Posyandu",
    description:
      "Catat hasil penimbangan dan bantu keluarga mengikuti perkembangan balitanya.",
    link: "/login",
    action: "Masuk sebagai kader",
    style: "bg-sky-50 text-sky-700",
  },
  {
    icon: ShieldCheck,
    title: "Admin & Tenaga Kesehatan",
    description:
      "Kelola data dan dukung pemantauan program kesehatan ibu dan anak.",
    link: "/login",
    action: "Masuk ke PoliGizi",
    style: "bg-violet-50 text-violet-700",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            aria-label="PoliGizi beranda"
            className="flex items-center gap-2.5"
            href="/"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A896] text-white shadow-sm shadow-teal-900/10">
              <HeartPulse aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Poli<span className="text-[#008f80]">Gizi</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              className="text-sm font-medium text-slate-600 transition hover:text-[#008f80]"
              href="#fitur"
            >
              Fitur
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 transition hover:text-[#008f80]"
              href="#cara-kerja"
            >
              Cara Kerja
            </Link>
            <Link
              className="text-sm font-medium text-slate-600 transition hover:text-[#008f80]"
              href="#peran"
            >
              Untuk Siapa
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#008f80] sm:px-4"
              href="/login"
            >
              Masuk
            </Link>
            <Link
              className="inline-flex min-h-10 items-center justify-center rounded-xl bg-[#00A896] px-3.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#008f80] sm:px-4 sm:text-sm"
              href="/register"
            >
              <span className="sm:hidden">Daftar</span>
              <span className="hidden sm:inline">Daftar Orang Tua</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-7 overflow-x-auto border-t border-slate-100 px-4 py-2.5 md:hidden">
          <Link
            className="shrink-0 text-xs font-medium text-slate-600 transition hover:text-[#008f80]"
            href="#fitur"
          >
            Fitur
          </Link>
          <Link
            className="shrink-0 text-xs font-medium text-slate-600 transition hover:text-[#008f80]"
            href="#cara-kerja"
          >
            Cara Kerja
          </Link>
          <Link
            className="shrink-0 text-xs font-medium text-slate-600 transition hover:text-[#008f80]"
            href="#peran"
          >
            Untuk Siapa
          </Link>
        </div>
      </nav>

      <section className="relative isolate bg-[#f5fbf9]">
        <div
          aria-hidden="true"
          className="absolute -right-36 top-0 -z-10 h-[38rem] w-[38rem] rounded-full bg-[#00A896]/[0.07] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-0 -z-10 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-3.5 py-2 text-xs font-semibold text-[#007f72] shadow-sm sm:text-sm">
              <Sparkles aria-hidden="true" className="h-4 w-4" />
              Teman tumbuh sehat keluarga Indonesia
            </div>
            <h1 className="text-[2.65rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.55rem]">
              Pantau tumbuh kembang,
              <span className="mt-1 block text-[#008f80]">
                cegah risiko sejak dini.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Pendamping digital keluarga dan Posyandu untuk memantau
              pertumbuhan balita dengan kurva standar WHO dan analisis berbasis
              Machine Learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00A896] px-5 text-sm font-semibold text-white shadow-lg shadow-[#00A896]/20 transition hover:-translate-y-0.5 hover:bg-[#008f80]"
                href="/login"
              >
                Mulai Pantau Anak
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:border-teal-200 hover:bg-teal-50/50 hover:text-[#008f80]"
                href="/register"
              >
                <Baby aria-hidden="true" className="h-4 w-4" />
                Daftar Akun Orang Tua
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-slate-500 sm:text-sm">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 text-[#00A896]"
                />
                Mudah digunakan
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-4 w-4 text-[#00A896]"
                />
                Terhubung dengan Posyandu
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-teal-100/70 via-white to-sky-100/70 blur-xl"
            />
            <div className="relative rounded-[1.75rem] border border-white bg-white p-4 shadow-[0_30px_90px_-40px_rgba(15,76,70,0.35)] sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-[#008f80]">
                    <Baby aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-500">Profil balita</p>
                    <p className="mt-0.5 font-bold text-slate-900">
                      Arka Pratama
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  Gizi Baik
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] text-slate-500">Usia</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">18 bln</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] text-slate-500">Berat</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">10,8 kg</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] text-slate-500">Tinggi</p>
                  <p className="mt-1 text-sm font-bold text-slate-900">79,5 cm</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Kurva pertumbuhan
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Berat badan menurut umur
                    </p>
                  </div>
                  <span className="rounded-lg bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-[#008f80]">
                    BB/U
                  </span>
                </div>
                <svg
                  aria-label="Ilustrasi kurva berat badan balita dalam rentang pertumbuhan normal"
                  className="mt-4 h-auto w-full"
                  role="img"
                  viewBox="0 0 360 142"
                >
                  <path
                    d="M22 104 C90 91 135 77 190 58 C245 40 295 30 338 22 L338 115 C270 123 210 128 150 130 C100 132 55 128 22 124 Z"
                    fill="#ccfbf1"
                  />
                  <path
                    d="M22 111 C80 102 137 84 190 71 C246 55 291 45 338 38"
                    fill="none"
                    stroke="#99f6e4"
                    strokeDasharray="5 5"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 104 C90 91 135 77 190 58 C245 40 295 30 338 22"
                    fill="none"
                    stroke="#5eead4"
                    strokeDasharray="5 5"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 109 C81 102 130 87 177 79 C224 70 274 51 338 44"
                    fill="none"
                    stroke="#008f80"
                    strokeLinecap="round"
                    strokeWidth="3"
                  />
                  {[22, 81, 140, 199, 258, 317].map((x, index) => {
                    const y = [109, 102, 87, 79, 63, 47][index];
                    return (
                      <circle
                        cx={x}
                        cy={y}
                        fill="#00A896"
                        key={x}
                        r="4.5"
                        stroke="white"
                        strokeWidth="2"
                      />
                    );
                  })}
                  <line
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    x1="22"
                    x2="338"
                    y1="130"
                    y2="130"
                  />
                  <text fill="#94a3b8" fontSize="9" x="18" y="141">
                    6 bln
                  </text>
                  <text fill="#94a3b8" fontSize="9" x="302" y="141">
                    18 bln
                  </text>
                </svg>
                <div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#007f72]">
                  <span className="h-2 w-2 rounded-full bg-[#00A896]" />
                  Pertumbuhan terpantau baik
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl bg-amber-50/80 p-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-amber-600">
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-slate-800">
                    Jadwal Posyandu berikutnya
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-slate-500">
                    21 November · Posyandu Melati 02
                  </p>
                </div>
                <ArrowDownRight
                  aria-hidden="true"
                  className="h-4 w-4 text-amber-600"
                />
              </div>
              <p className="mt-3 text-center text-[10px] text-slate-400">
                Ilustrasi pratinjau · data hanya contoh
              </p>
            </div>

            <div className="absolute -left-7 top-20 hidden items-center gap-2 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 shadow-lg shadow-slate-900/5 sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Activity aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Tumbuh terpantau
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ["Satu tempat", "Catatan pertumbuhan"],
            ["Acuan WHO", "Pemantauan terarah"],
            ["Terhubung", "Keluarga & Posyandu"],
            ["Lebih siap", "Kunjungan rutin"],
          ].map(([title, description]) => (
            <div className="flex items-center gap-3" key={title}>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#008f80]">
                <Check aria-hidden="true" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-800">{title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 bg-white py-20 sm:py-24" id="fitur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-[#008f80]">
              <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
              Fitur PoliGizi
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Informasi penting, lebih mudah dipahami
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Dukungan digital untuk membantu keluarga dan tenaga Posyandu
              memantau tumbuh kembang balita secara teratur.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(
              ({ icon: Icon, number, title, description, iconStyle }) => (
                <article
                  className="group rounded-2xl border border-slate-100 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-900/[0.05] sm:p-6"
                  key={number}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconStyle}`}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold text-slate-300">
                      {number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#008f80] opacity-0 transition group-hover:opacity-100">
                    Kenali lebih lanjut
                    <ChevronRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="scroll-mt-24 bg-[#f5fbf9] py-20 sm:py-24"
        id="cara-kerja"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#008f80] shadow-sm">
              <BookOpenCheck aria-hidden="true" className="h-3.5 w-3.5" />
              Cara kerja
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Tiga langkah, satu tujuan
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-500">
              Mendampingi keluarga agar pemantauan tumbuh kembang lebih
              teratur dan berkelanjutan.
            </p>
          </div>

          <div className="relative mt-12 grid gap-5 md:grid-cols-3">
            <div
              aria-hidden="true"
              className="absolute left-[18%] right-[18%] top-10 hidden border-t-2 border-dashed border-teal-200 md:block"
            />
            {steps.map(({ number, icon: Icon, title, description }) => (
              <article
                className="relative rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm sm:p-8"
                key={number}
              >
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-[#008f80] ring-8 ring-white">
                  <Icon aria-hidden="true" className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00A896] text-[10px] font-bold text-white">
                    {number.slice(1)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 bg-white py-20 sm:py-24" id="peran">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1.5 text-xs font-semibold text-[#008f80]">
                <UsersRound aria-hidden="true" className="h-3.5 w-3.5" />
                Bersama untuk balita
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                PoliGizi untuk setiap peran
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-500">
                Kolaborasi keluarga dan layanan kesehatan dimulai dari
                informasi yang mudah diakses.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {roles.map(
              ({ icon: Icon, title, description, link, action, style }) => (
                <article
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7"
                  key={title}
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style}`}
                  >
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                    {description}
                  </p>
                  <Link
                    className="mt-6 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#008f80] transition hover:gap-3"
                    href={link}
                  >
                    {action}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[1.75rem] bg-[#00A896] p-6 text-white sm:flex-row sm:items-center sm:p-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal-50">
              Langkah kecil untuk masa depan yang lebih sehat
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Yuk, mulai pantau tumbuh kembang si kecil.
            </h2>
            <p className="mt-3 text-sm leading-6 text-teal-50">
              Daftar dan hubungkan keluarga Anda dengan pemantauan Posyandu.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-[#007f72] transition hover:bg-teal-50"
            href="/register"
          >
            Daftar Orang Tua
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 bg-[#f8faf9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
          <div>
            <Link className="inline-flex items-center gap-2.5" href="/">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00A896] text-white">
                <HeartPulse aria-hidden="true" className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-slate-900">
                Poli<span className="text-[#008f80]">Gizi</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Sahabat keluarga dan Posyandu dalam mendampingi tumbuh kembang
              balita Indonesia.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Jelajahi</h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              <Link
                className="text-sm text-slate-500 transition hover:text-[#008f80]"
                href="#fitur"
              >
                Fitur PoliGizi
              </Link>
              <Link
                className="text-sm text-slate-500 transition hover:text-[#008f80]"
                href="#cara-kerja"
              >
                Cara kerja
              </Link>
              <Link
                className="text-sm text-slate-500 transition hover:text-[#008f80]"
                href="#peran"
              >
                Untuk siapa
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Akun</h2>
            <div className="mt-4 flex flex-col items-start gap-3">
              <Link
                className="text-sm text-slate-500 transition hover:text-[#008f80]"
                href="/login"
              >
                Masuk
              </Link>
              <Link
                className="text-sm text-slate-500 transition hover:text-[#008f80]"
                href="/register"
              >
                Daftar Orang Tua
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100">
          <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-slate-400 sm:px-6 lg:px-8">
            © 2026 PoliGizi · Mendampingi keluarga Indonesia tumbuh sehat
          </p>
        </div>
      </footer>
    </main>
  );
}
