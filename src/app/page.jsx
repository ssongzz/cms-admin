'use client';

import { contents } from '@/data/contents';
import ContentList from '@/components/ContentList';
import { useState } from 'react';
import { STATUS_MAP } from '@/constants/status';

export default function Page() {
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredContents = contents.filter(item => {
    if (filterStatus === 'all' || filterStatus === 'ALL') return true;
    return item.status === filterStatus;
  });

  return (
    <main className="pt-8 px-8 pb-12 w-full max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900">이벤트 관리</h1>
        <p className="text-zinc-500">진행중인 이벤트를 관리하고 모니터링하세요.</p>
      </div>

      <div className="flex justify-between items-center py-4">
        <span className="text-zinc-500 text-sm">총 <strong className="text-zinc-900 font-semibold ml-1">{filteredContents.length}</strong>건</span>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-white border border-zinc-200 text-zinc-900 text-sm rounded-lg focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 block p-2.5 min-w-[120px] outline-none transition-all hover:border-zinc-400"
        >
          <option value="all">전체보기</option>
          {
            Object.keys(STATUS_MAP).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))
          }
        </select>
      </div>
      <ContentList items={filteredContents} />
    </main>
  );
}
