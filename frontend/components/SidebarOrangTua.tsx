"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Baby,
  CalendarDays,
  ChartLine,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import type { User } from "@/types";

interface SidebarOrangTuaProps {
  user?: User;
}

interface ParentNavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

const navigationItems: ParentNavItem[] = [
  {
    href: "/orangtua/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/orangtua/kurva-riwayat",
    label: "Kurva & Riwayat",
    icon: ChartLine,
  },
  {
    href: "/orangtua/jadwal",
    label: "Jadwal Posyandu",
    icon: CalendarDays,
  },
];

const defaultParent: User = {
  id: "orangtua-demo",
  nama: "Ibu Siti Aminah",
  email: "",
  role: "orangtua",
};

function NavigationLinks({
  pathname,
  mobile = false,
}: {
  pathname: string;
  mobile?: boolean;
}) {
  return (
    <>
      {navigationItems.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-3 rounded-xl font-medium transition ${
              mobile
                ? `min-h-14 flex-1 flex-col justify-center gap-1 px-1 text-[11px] ${
                    isActive
                      ? "bg-[#00A896]/10 text-[#008f80]"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }`
                : `px-3.5 py-3 text-sm ${
                    isActive
                      ? "bg-[#00A896]/10 text-[#008f80]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
            }`}
            href={href}
            key={href}
          >
            <Icon
              aria-hidden="true"
              className="h-5 w-5"
              strokeWidth={isActive ? 2.25 : 1.8}
            />
            <span className={mobile ? "text-center leading-tight" : undefined}>
              {label}
            </span>
          </Link>
        );
      })}
    </>
  );
}

export default function SidebarOrangTua({
  user = defaultParent,
}: SidebarOrangTuaProps) {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 flex-col border-r border-slate-100 bg-white px-5 py-6 lg:flex">
        <Link
          className="mb-9 flex items-center gap-3 px-2"
          href="/orangtua/dashboard"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00A896] text-white shadow-sm shadow-[#00A896]/20">
            <HeartPulse aria-hidden="true" className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-lg font-bold tracking-tight text-slate-900">
              PoliGizi
            </span>
            <span className="block text-xs text-slate-500">
              Sahabat tumbuh kembang
            </span>
          </span>
        </Link>

        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Menu utama
        </p>
        <nav aria-label="Navigasi Orang Tua" className="flex flex-col gap-1.5">
          <NavigationLinks pathname={pathname} />
        </nav>

        <div className="mt-auto">
          <div className="mb-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#00A896]/10 text-[#008f80]">
              <Baby aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-slate-800">
                {user.nama}
              </span>
              <span className="block text-xs text-slate-500">
                Orang Tua Balita
              </span>
            </span>
          </div>
          <Link
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
            href="/login"
          >
            <LogOut aria-hidden="true" className="h-5 w-5" />
            Keluar
          </Link>
        </div>
      </aside>

      <header className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-6 lg:hidden">
        <Link
          className="flex min-w-0 items-center gap-2.5"
          href="/orangtua/dashboard"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00A896] text-white">
            <HeartPulse aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold text-slate-900">
              PoliGizi
            </span>
            <span className="block max-w-[10rem] truncate text-xs text-slate-500">
              {user.nama} · Orang Tua Balita
            </span>
          </span>
        </Link>
        <Link
          aria-label="Keluar"
          className="flex h-10 shrink-0 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
          href="/login"
        >
          <LogOut aria-hidden="true" className="h-4 w-4" />
          <span>Keluar</span>
        </Link>
      </header>

      <nav
        aria-label="Navigasi Orang Tua mobile"
        className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-100 bg-white/95 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 shadow-[0_-8px_24px_-18px_rgba(15,76,70,0.3)] backdrop-blur lg:hidden"
      >
        <NavigationLinks mobile pathname={pathname} />
      </nav>
    </>
  );
}
