import React from 'react';
import Image from 'next/image';

import Button from './Button';

import styles from '../styles/Card.module.scss';

export default function Card({ icon, title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Image src={icon} height='90' width='90' />
      </div>
      <h4>{title}</h4>
      <p className={styles.p}>{children}</p>
      <div className={styles.action}>
        <Button href='#' text='See more' size='xs' />
      </div>
    </div>
  );
}
