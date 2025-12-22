'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './GNB.module.css';
import ThemeToggle from './ThemeToggle';

export default function GNB() {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                CMS Admin
            </Link>

            <div className={styles.rightSection}>
                <nav className={styles.nav}>
                    <Link
                        href="/"
                        className={`${styles.link} ${isActive('/') ? styles.linkActive : ''}`}
                    >
                        콘텐츠 관리
                    </Link>
                    <Link
                        href="/members"
                        className={`${styles.link} ${isActive('/members') ? styles.linkActive : ''}`}
                    >
                        회원 관리
                    </Link>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}
