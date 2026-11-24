"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmation = formData.get("passwordConfirmation");

    if (password !== confirmation) {
      setFormMessage("Konfirmasi password belum sama. Periksa kembali password Anda.");
      return;
    }

    setFormMessage(
      "Pendaftaran belum terhubung. Silakan coba kembali saat layanan akun tersedia.",
    );
  }

  return (
    <main className="flex min-h-screen bg-[#f5f9f8] text-slate-800">
      <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#00A896] p-12 text-white lg:flex xl:p-16">
        <div
          aria-hidden="true"
          className="absolute -right-36 -top-32 h-[28rem] w-[28rem] rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-48 -left-24 h-[34rem] w-[34rem] rounded-full border border-white/15"
        />
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
            <HeartPulse aria-hidden="true" className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">PoliGizi</span>
        </div>

        <div className="relative z-10 max-w-xl py-12">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
            Langkah awal untuk keluarga sehat
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            Temani setiap
            <br />
            langkah tumbuh
            <br />
            <span className="text-teal-100">kembang si kecil.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-teal-50/90">
            Buat akun Orang Tua untuk memantau catatan kesehatan dan tumbuh
            kembang balita bersama Posyandu.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3 text-sm text-teal-50/90">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
          </span>
          Data kesehatan dikelola dengan aman
        </div>
      </section>

      <section className="flex min-h-screen w-full items-center justify-center px-5 py-10 sm:px-8 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00A896] text-white">
              <HeartPulse aria-hidden="true" className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              PoliGizi
            </span>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,76,70,0.22)] sm:p-9">
            <Link
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#008f80]"
              href="/login"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Kembali ke login
            </Link>

            <div className="mb-6">
              <p className="mb-2 text-sm font-semibold text-[#00A896]">
                Akun Orang Tua Balita
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Daftar akun
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Isi data berikut untuk mulai menggunakan PoliGizi.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="fullName"
                >
                  Nama lengkap orang tua
                </label>
                <div className="relative">
                  <UserRound
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="name"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="fullName"
                    name="fullName"
                    placeholder="Masukkan nama lengkap"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="identity"
                >
                  NIK atau email
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="username"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="identity"
                    name="identity"
                    placeholder="Masukkan NIK atau email"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="whatsapp"
                >
                  Nomor WhatsApp
                </label>
                <div className="relative">
                  <Phone
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="tel"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Contoh: 081234567890"
                    required
                    type="tel"
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="password"
                    minLength={8}
                    name="password"
                    placeholder="Minimal 8 karakter"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    aria-label={
                      showPassword ? "Sembunyikan password" : "Tampilkan password"
                    }
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    onClick={() => setShowPassword((isVisible) => !isVisible)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Eye aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="passwordConfirmation"
                >
                  Konfirmasi password
                </label>
                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="passwordConfirmation"
                    minLength={8}
                    name="passwordConfirmation"
                    placeholder="Ulangi password"
                    required
                    type={showConfirmation ? "text" : "password"}
                  />
                  <button
                    aria-label={
                      showConfirmation
                        ? "Sembunyikan konfirmasi password"
                        : "Tampilkan konfirmasi password"
                    }
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
                    onClick={() =>
                      setShowConfirmation((isVisible) => !isVisible)
                    }
                    type="button"
                  >
                    {showConfirmation ? (
                      <EyeOff aria-hidden="true" className="h-4 w-4" />
                    ) : (
                      <Eye aria-hidden="true" className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {formMessage ? (
                <p
                  aria-live="polite"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-800"
                  role="status"
                >
                  {formMessage}
                </p>
              ) : null}

              <button
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A896]"
                type="submit"
              >
                Buat akun
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Sudah punya akun?{" "}
              <Link
                className="font-semibold text-[#008f80] transition hover:text-[#006f64]"
                href="/login"
              >
                Masuk
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            © 2026 PoliGizi · Mendampingi keluarga Indonesia tumbuh sehat
          </p>
        </div>
      </section>
    </main>
  );
}
