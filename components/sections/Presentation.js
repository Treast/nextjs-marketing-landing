import React from 'react';
import Image from 'next/image';

import Button from '../Button';

import layoutStyles from '../../styles/Layout.module.scss';
import styles from '../../styles/Presentation.module.scss';

export default function Presentation() {
  return (
    <section className={`${layoutStyles.container} ${styles.section}`}>
      <div className={layoutStyles.grid}>
        <div className={styles.content}>
          <h1>Social media for business</h1>
          <h5>PERFOMANCE BASED SOCIAL MEDIA AGENCY WE ARE LOREM MEDIA</h5>
          <Button text='Get a free audit' href='#' />
        </div>
        <div className={styles.illustration}>
          <Image src='/images/presentation_illustration.svg' height='470' width='587' />
        </div>
      </div>
    </section>
  );
}
