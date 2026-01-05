'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import { Fragment } from 'react';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">CMS 관리자</Link>
            </div>
            <div className={styles.linkWrap}>
                <Link href="">이벤트 관리</Link>
                <Link href="">회원 관리</Link>
            </div>
        </header>
    );
}
