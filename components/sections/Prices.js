import React from 'react';

import Price from '../Price';

import layoutStyles from '../../styles/Layout.module.scss';
import styles from '../../styles/Prices.module.scss';

export default function Prices() {
  return (
    <section className={styles.section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.grid}>
          <div className={styles.title}>
            <h3>Pricing</h3>
            <h2>Our Pricing</h2>
          </div>
          <Price product='Gold Package' price='$ 140'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit.
          </Price>
          <Price product='Platinium Package' price='$ 140'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit.
          </Price>
          <Price product='Silver Package' price='$ 140'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl nibh, sagittis ac faucibus sit.
          </Price>
        </div>
      </div>
    </section>
  );
}
