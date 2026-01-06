'use client';

import { STATUS_MAP } from '@/constants/status';

const STATUS_STYLES = {
  Ongoing: 'bg-emerald-500/15 text-emerald-500',
  Upcoming: 'bg-amber-500/15 text-amber-500',
  Completed: 'bg-red-500/15 text-red-500',
  Private: 'bg-indigo-500/15 text-indigo-500'
};

export default function ContentList({ items }) {
  return (
    <div className="overflow-hidden border border-zinc-200 rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-zinc-50 border-b border-zinc-200">
          <tr>
            <th className="px-6 py-4 text-xs font-semibold text-zinc-500 tracking-wider">이름</th>
            <th className="px-6 py-4 text-xs font-semibold text-zinc-500 tracking-wider">이벤트명</th>
            <th className="px-6 py-4 text-xs font-semibold text-zinc-500 tracking-wider">작성자</th>
            <th className="px-6 py-4 text-xs font-semibold text-zinc-500 tracking-wider">상태</th>
            <th className="px-6 py-4 text-xs font-semibold text-zinc-500 tracking-wider">작성일</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200">
          {items.map(item => (
            <tr key={item.id} className="hover:bg-zinc-50 transition-colors">
              <td className="px-6 py-4 text-sm text-zinc-600">{item.id}</td>
              <td className="px-6 py-4 text-sm text-zinc-900 font-medium">{item.title}</td>
              <td className="px-6 py-4 text-sm text-zinc-500">{item.author}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[STATUS_MAP[item.status]] || 'bg-zinc-100 text-zinc-500'}`}>
                  {item.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-zinc-500">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
