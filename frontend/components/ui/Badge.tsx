import React from 'react';
import { StatusGizi } from '@/types';
 
interface BadgeStatusProps {
  status: StatusGizi;
}
 
const statusConfig: Record<StatusGizi, { label: string; className: string }> = {
  normal: { label: 'Normal Gizi Baik', className: 'bg-green-50 text-green-700 border-green-200' },
  stunting: { label: 'Indikasi Stunting', className: 'bg-red-50 text-red-700 border-red-200' },
  wasting: { label: 'Wasting (Kurus)', className: 'bg-orange-50 text-orange-700 border-orange-200' },
  underweight: { label: 'Underweight (BB Kurang)', className: 'bg-amber-50 text-amber-700 border-amber-200' },
  overweight: { label: 'Overweight (Gizi Lebih)', className: 'bg-purple-50 text-purple-700 border-purple-200' },
};
 
export const BadgeStatus: React.FC<BadgeStatusProps> = ({ status }) => {
  const config = statusConfig[status] || statusConfig.normal;
 
  return (
	<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${config.className}`}>
  	<span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
  	{config.label}
	</span>
  );
};
