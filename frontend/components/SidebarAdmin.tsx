'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  Sliders, 
  FileSpreadsheet, 
  LogOut, 
  ShieldCheck 
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard Wilayah',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Pusat Data Balita',
    href: '/admin/data-balita',
    icon: Users,
  },
  {
    title: 'Rule Engine AI',
    href: '/admin/rule-engine',
    icon: Sliders,
  },
  {
    title: 'Laporan Rekapitulasi',
    href: '/admin/laporan',
    icon: FileSpreadsheet,
  },
];

export const SidebarAdmin: React.FC = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 min-h-screen flex flex-col justify-between p-4 font-sans border-r border-slate-800">
      <div>
        {/* Brand Logo & Header */}
        <div className="flex items-center gap-3 px-3 py-4 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#0284C7] flex items-center justify-center text-white shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white tracking-wide">PoliGizi</h1>
            <span className="text-[11px] font-medium bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-full border border-sky-500/20">
              Admin / Nakes
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5">
          <p className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Manajemen Cerdas
          </p>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00A896] text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Logout */}
      <div className="pt-4 border-t border-slate-800/80">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 text-rose-400" />
          <span>Keluar</span>
        </Link>
      </div>
    </aside>
  );
};