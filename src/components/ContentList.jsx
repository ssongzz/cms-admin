'use client';

import styles from './ContentList.module.css';
import { STATUS_MAP } from '@/constants/status';

export default function ContentList({ items }) {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>이름</th>
            <th>이벤트명</th>
            <th>작성자</th>
            <th>상태</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <span className={`${styles.status}${STATUS_MAP[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
