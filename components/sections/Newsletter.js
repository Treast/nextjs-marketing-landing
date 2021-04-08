import React from 'react';

import Button from '../Button';

import layoutStyles from '../../styles/Layout.module.scss';
import styles from '../../styles/Newsletter.module.scss';

export default function Newsletter() {
  return (
    <section className={`${layoutStyles.container} ${styles.section}`}>
      <div className={layoutStyles.grid}>
        <div className={styles.title}>
          <h3>Newsletter</h3>
          <h2>
            Do you want to get <strong>Special News?</strong>
          </h2>
        </div>
        <form action='#' className={styles.form}>
          <input type='text' placeholder='Drop Your Email' />
          <Button text='Subscribe' href='#' />
        </form>
      </div>
    </section>
  );
}
