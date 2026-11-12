"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Baby,
  CheckCircle2,
  ClipboardList,
  Eye,
  EyeOff,
  HeartPulse,
  LockKeyhole,
  Mail,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { RoleUser } from "@/types";

interface LoginRoleOption {
  role: RoleUser;
  label: string;
  description: string;
  icon: LucideIcon;
}

const roleOptions: LoginRoleOption[] = [
  {
    role: "orangtua",
    label: "Orang Tua",
    description: "Pantau tumbuh kembang anak",
    icon: Baby,
  },
  {
    role: "kader",
    label: "Kader",
    description: "Kelola layanan Posyandu",
    icon: ClipboardList,
  },
  {
    role: "admin",
    label: "Admin",
    description: "Kelola data dan pengguna",
    icon: ShieldCheck,
  },
];

const dashboardPaths: Record<RoleUser, string> = {
  orangtua: "/orangtua/dashboard",
  kader: "/kader/dashboard",
  admin: "/admin/dashboard",
};

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<RoleUser>("orangtua");
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const activeRole = roleOptions.find(({ role }) => role === selectedRole);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginMessage(
      "Autentikasi akun belum terhubung. Gunakan Demo Login untuk mencoba dashboard.",
    );
  }

  function handleDemoLogin() {
    router.push(dashboardPaths[selectedRole]);
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
            Tumbuh sehat, mulai dari Posyandu
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight xl:text-5xl">
            Bersama menjaga
            <br />
            tumbuh kembang
            <br />
            <span className="text-teal-100">generasi masa depan.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-teal-50/90">
            Satu platform untuk memantau gizi balita, mendukung kader, dan
            menghubungkan keluarga dengan layanan kesehatan.
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
            <div className="mb-7">
              <p className="mb-2 text-sm font-semibold text-[#00A896]">
                Selamat datang kembali
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Masuk ke akun Anda
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Pilih peran untuk melanjutkan ke PoliGizi.
              </p>
            </div>

            <div
              aria-label="Pilih peran"
              className="mb-7 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-1.5"
              role="group"
            >
              {roleOptions.map(({ role, label, icon: Icon }) => {
                const isSelected = selectedRole === role;

                return (
                  <button
                    key={role}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => {
                      setSelectedRole(role);
                      setLoginMessage("");
                    }}
                    className={`flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl px-2 py-3 text-xs font-semibold transition sm:text-sm ${
                      isSelected
                        ? "bg-white text-[#008f80] shadow-sm ring-1 ring-slate-100"
                        : "text-slate-500 hover:bg-white/70 hover:text-slate-700"
                    }`}
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                    {label}
                  </button>
                );
              })}
            </div>
            <p className="-mt-4 mb-6 text-center text-xs text-slate-500">
              {activeRole?.description}
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="identity"
                >
                  Email atau username
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
                    placeholder="nama@email.com"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    className="block text-sm font-medium text-slate-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="text-xs font-semibold text-[#008f80] transition hover:text-[#006f64] sm:text-sm"
                    href="/forgot-password"
                  >
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#00A896] focus:ring-4 focus:ring-[#00A896]/10"
                    id="password"
                    name="password"
                    placeholder="Masukkan password"
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

              {loginMessage ? (
                <p
                  aria-live="polite"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-5 text-amber-800"
                  role="status"
                >
                  {loginMessage}
                </p>
              ) : null}

              <button
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00A896] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#008f80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A896]"
                type="submit"
              >
                Masuk
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-slate-100" />
              <span className="text-xs font-medium text-slate-400">
                ATAU COBA DEMO
              </span>
              <span className="h-px flex-1 bg-slate-100" />
            </div>

            <button
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#00A896]/30 bg-[#00A896]/5 px-4 text-sm font-semibold text-[#007f72] transition hover:border-[#00A896]/50 hover:bg-[#00A896]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A896]"
              onClick={handleDemoLogin}
              type="button"
            >
              <ShieldCheck aria-hidden="true" className="h-4 w-4" />
              Demo Login (Bypass)
              <ArrowRight aria-hidden="true" className="ml-auto h-4 w-4" />
            </button>

            <p className="mt-7 text-center text-sm text-slate-500">
              Belum punya akun?{" "}
              <Link
                className="font-semibold text-[#008f80] transition hover:text-[#006f64]"
                href="/register"
              >
                Daftar sekarang
              </Link>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-400">
            © 2026 PoliGizi · Mendampingi keluarga
            Indonesia tumbuh sehat
          </p>
        </div>
      </section>
    </main>
  );
}
