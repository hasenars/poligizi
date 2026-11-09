# PoliGizi - Design Context & Coding Rules

## Tech Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide React Icons.

## Design System & Colors
- Primary Accent Color: `#00A896` (Gunakan hex ini atau class `bg-[#00A896]`, `text-[#00A896]`, `border-[#00A896]`).
- Secondary Accent Color: `#0284C7` (Biru aksen).
- UI Style: Clean, modern, medical-tech dashboard (`rounded-2xl`, `shadow-sm`, `border border-gray-100`).
- Icons: Use `lucide-react`.

## Status Gizi Color Scheme
- Normal: `bg-green-50 text-green-700 border-green-200`
- Stunting: `bg-red-50 text-red-700 border-red-200`
- Wasting: `bg-orange-50 text-orange-700 border-orange-200`
- Underweight: `bg-amber-50 text-amber-700 border-amber-200`
- Overweight: `bg-purple-50 text-purple-700 border-purple-200`

## Coding Rules
- Use TypeScript with explicit interfaces imported from `@/types`.
- Keep components modular, clean, and mobile-friendly.