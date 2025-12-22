'use client';

import React from 'react';
import styles from './MemberList.module.css';

export default function MemberList({ items }) {
    const getGradeStyle = (grade) => {
        switch (grade) {
            case '정회원': return styles.gradeRegular;
            case '준회원': return styles.gradeAssociate;
            default: return '';
        }
    };

    const getAuthStyle = (status) => {
        switch (status) {
            case '서류인증': return styles.authDocument;
            case '메일인증': return styles.authEmail;
            case '미인증': return styles.authNone;
            default: return '';
        }
    };

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>이름</th>
                        <th>이메일</th>
                        <th>등급</th>
                        <th>교사 인증</th>
                        <th>소속</th>
                        <th>가입일</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <span className={`${styles.badge} ${getGradeStyle(item.grade)}`}>
                                    {item.grade}
                                </span>
                            </td>
                            <td>
                                <span className={`${styles.badge} ${getAuthStyle(item.authStatus)}`}>
                                    {item.authStatus}
                                </span>
                            </td>
                            <td>{item.affiliation}</td>
                            <td>{item.joinDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
