"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
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
            <ShieldCheck aria-hidden="true" className="h-4 w-4" />
            Akun Anda tetap aman
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            Akses kembali
            <br />
            untuk terus
            <br />
            <span className="text-teal-100">mendampingi si kecil.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-teal-50/90">
            Kami akan membantu Anda mengatur ulang password agar dapat kembali
            memantau tumbuh kembang balita bersama PoliGizi.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3 text-sm text-teal-50/90">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
          </span>
          Tumbuh sehat, mulai dari Posyandu
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
              className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#008f80]"
              href="/login"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Kembali ke login
            </Link>

            {isSubmitted ? (
              <div aria-live="polite" className="py-2" role="status">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-green-700">
                  <CheckCircle2 aria-hidden="true" className="h-7 w-7" />
                </div>
                <p className="mb-2 text-sm font-semibold text-[#00A896]">
                  Permintaan berhasil
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Periksa pesan Anda
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Jika akun dengan email atau nomor WhatsApp tersebut terdaftar,
                  instruksi untuk mengatur ulang password akan dikirimkan.
                </p>
                <Link
                  className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A896]"
                  href="/login"
                >
                  Kembali ke login
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <p className="mb-2 text-sm font-semibold text-[#00A896]">
                    Pemulihan akun
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Lupa password?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Masukkan email atau nomor WhatsApp yang terhubung ke akun
                    Anda. Kami akan mengirimkan instruksi reset password.
                  </p>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label
                      className="mb-2 block text-sm font-medium text-slate-700"
                      htmlFor="identity"
                    >
                      Email atau nomor WhatsApp
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
                        placeholder="nama@email.com atau 081234567890"
                        required
                        type="text"
                      />
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                      <MessageCircle
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                      Gunakan email atau nomor WhatsApp terdaftar.
                    </p>
                  </div>

                  <button
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A896]"
                    type="submit"
                  >
                    Kirim link reset password
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </button>
                </form>

                <p className="mt-7 text-center text-sm text-slate-500">
                  Ingat password Anda?{" "}
                  <Link
                    className="font-semibold text-[#008f80] transition hover:text-[#006f64]"
                    href="/login"
                  >
                    Masuk
                  </Link>
                </p>
              </>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            © 2026 PoliGizi · Mendampingi keluarga Indonesia tumbuh sehat
          </p>
        </div>
      </section>
    </main>
  );
}
