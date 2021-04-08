import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import layoutStyles from '../../styles/Layout.module.scss';
import styles from '../../styles/Navigation.module.scss';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.grid}>
          <div className={styles.logo}>
            <Image src='/images/logo.svg' height='67' width='120' />
          </div>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link href='#'>Home</Link>
              </li>
              <li>
                <Link href='#'>Services</Link>
              </li>
              <li>
                <Link href='#'>Prices</Link>
              </li>
              <li>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.shape}>
        <Image src='/images/bg_shape_navigation.svg' height='700' width='876' />
      </div>
    </header>
  );
}
