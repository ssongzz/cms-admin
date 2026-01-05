'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-white/80 sticky top-0 z-50 backdrop-blur-md border-b border-zinc-200 shadow-sm">
            <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-500 bg-clip-text text-transparent">
                <Link href="/">CMS 관리자</Link>
            </div>
            <div className="flex gap-4">
                <Link href="/" className="text-zinc-500 text-sm font-medium hover:text-zinc-900 hover:bg-zinc-100 px-3 py-2 rounded-md transition-all">이벤트 관리</Link>
                <Link href="/members" className="text-zinc-500 text-sm font-medium hover:text-zinc-900 hover:bg-zinc-100 px-3 py-2 rounded-md transition-all">회원 관리</Link>
            </div>
        </header>
    );
}
