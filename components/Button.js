import React from 'react';
import Link from 'next/link';

import styles from '@/styles/Button.module.scss';

export default function Button({ text, href, size = 'md', outline = false }) {
  return (
    <Link href={href}>
      <a className={`${styles.wrapper} ${styles['wrapper--' + size]} ${outline ? styles['wrapper--outlined'] : ''}`}>{text}</a>
    </Link>
  );
}
