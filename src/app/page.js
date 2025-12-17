'use client';
import styles from './page.module.css';
import { useState } from 'react';
import { contents } from '@/data/contents';
import ContentList from '@/components/ContentList';

const STATUS_OPTIONS = [
  { label: '전체', value: 'ALL' },
  { label: '공개', value: 'Published' },
  { label: '임시저장', value: 'Draft' },
  { label: '보관', value: 'Archived' },
  { label: '비공개', value: 'Private' }
];

export default function Page() {
  const [filterStatus, setFilterStatus] = useState('ALL');

  const filteredContents = contents.filter(item => {
    if (filterStatus === 'ALL') return true;
    return item.status === filterStatus;
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>CMS AdminPage</h1>

      <div className={styles.filterContainer}>
        <select
          className={styles.select}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <ContentList items={filteredContents} />
    </main>
  );
}
