import React from 'react';
import Button from './Button';

import styles from '../styles/Price.module.scss';

export default function Price({ product, children, price }) {
  return (
    <div className={styles.card}>
      <div className={styles.product}>{product}</div>
      <p className={styles.description}>{children}</p>
      <div className={styles.price}>{price}</div>
      <Button outline={true} text='See Details' href='#' />
    </div>
  );
}
