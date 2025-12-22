'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { members } from '@/data/members';
import MemberList from '@/components/MemberList';

export default function MembersPage() {
    const [filters, setFilters] = useState({
        grade: 'all',
        authStatus: 'all',
        affiliation: 'all'
    });

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const filteredMembers = members.filter(member => {
        // Grade Filter
        if (filters.grade !== 'all' && member.grade !== filters.grade) return false;

        // Auth Status Filter
        if (filters.authStatus !== 'all' && member.authStatus !== filters.authStatus) return false;

        // Affiliation Filter
        if (filters.affiliation !== 'all' && member.affiliation !== filters.affiliation) return false;

        return true;
    });

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>회원 관리</h1>

            <div className={styles.filterContainer}>
                <div className={styles.filterGroup}>
                    <label className={styles.label}>회원 등급</label>
                    <select
                        className={styles.select}
                        value={filters.grade}
                        onChange={(e) => handleFilterChange('grade', e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="정회원">정회원</option>
                        <option value="준회원">준회원</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>교사 인증</label>
                    <select
                        className={styles.select}
                        value={filters.authStatus}
                        onChange={(e) => handleFilterChange('authStatus', e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="서류인증">서류인증</option>
                        <option value="메일인증">메일인증</option>
                        <option value="미인증">미인증</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>소속 구분</label>
                    <select
                        className={styles.select}
                        value={filters.affiliation}
                        onChange={(e) => handleFilterChange('affiliation', e.target.value)}
                    >
                        <option value="all">전체</option>
                        <option value="초등">초등</option>
                        <option value="중학">중학</option>
                        <option value="고등">고등</option>
                    </select>
                </div>
            </div>

            <MemberList items={filteredMembers} />
        </main>
    );
}
