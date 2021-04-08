import React from 'react';

import layoutStyles from '@/styles/Layout.module.scss';
import styles from '@/styles/Services.module.scss';

import Card from '@/components/Card';

export default function Services() {
  return (
    <section className={`${layoutStyles.container} ${styles.section}`}>
      <div className={layoutStyles.grid}>
        <div className={styles.title}>
          <h3>Our services</h3>
          <h2>What We Offer</h2>
        </div>
      </div>
      <div className={layoutStyles.grid}>
        <Card icon={require('@/public/images/icons/001-process.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <Card icon={require('@/public/images/icons/002-social-media.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <Card icon={require('@/public/images/icons/003-responsive.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <Card icon={require('@/public/images/icons/004-social-media-1.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <Card icon={require('@/public/images/icons/007-analysis.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <Card icon={require('@/public/images/icons/008-computer.svg')} title='Socials growth campaign'>
          Our social growth campaign will have your socials come alive. With constant growth and engagement you will be sure to have the thriving
          you’ve been looking for.
        </Card>
        <div className={styles.background}>
          <img src={require('@/public/images/bg_services.svg')} height='1005' width='1500' />
        </div>
      </div>
    </section>
  );
}
