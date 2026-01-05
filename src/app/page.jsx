'use client';

import styles from './page.module.css';
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
    <main className={styles.main}>
      <h1 className={styles.title}>이벤트 관리</h1>
      <div className={styles.filterWrap}>
        <span className={styles.total}>총 <strong className={styles.num}>{filteredContents.length}</strong>건</span>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className={styles.select}
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
