'use client';

import React from 'react';
import styles from './ContentList.module.css';

export default function ContentList({ items }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>이벤트명</th>
            <th>담당 부서</th>
            <th>상태</th>
            <th>기간</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <span className={`${styles.status} ${styles[`status${item.status}`]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}
