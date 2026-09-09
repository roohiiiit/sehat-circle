import type { ComparisonRowData } from '../../types';

interface ComparisonRowProps extends ComparisonRowData {
  index: number;
}

export default function ComparisonRow({ feature, traditional, sehatCircle, index }: ComparisonRowProps) {
  return (
    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
      <td className="px-4 py-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-teal-700 bg-teal-50 px-2 py-1 rounded-md">
          {feature}
        </span>
      </td>
      <td className="px-4 py-4 sm:px-6">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-red-400 font-bold text-sm" aria-hidden="true">✗</span>
          <p className="text-sm text-slate-600 leading-relaxed">{traditional}</p>
        </div>
      </td>
      <td className="px-4 py-4 sm:px-6">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 shrink-0 text-teal-500 font-bold text-sm" aria-hidden="true">✓</span>
          <p className="text-sm text-slate-800 font-medium leading-relaxed">{sehatCircle}</p>
        </div>
      </td>
    </tr>
  );
}
