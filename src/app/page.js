'use client';

import styles from './page.module.css';
import { contents } from '@/data/contents';
import ContentList from '@/components/ContentList';

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>CMS AdminPage</h1>
      <ContentList items={contents} />
    </main>
  );
}
