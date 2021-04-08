import React from 'react';

import Button from '@/components/Button';

import layoutStyles from '@/styles/Layout.module.scss';
import styles from '@/styles/Biography.module.scss';

export default function Biography() {
  return (
    <section className={`${layoutStyles.container} ${styles.section}`}>
      <div className={layoutStyles.grid}>
        <div className={styles.illustration}>
          <img src={require('@/public/images/biography_illustration.svg')} height='440' width='600' />
        </div>
        <div className={styles.content}>
          <h3>Biography</h3>
          <h2>Who we are</h2>
          <p>
            Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you
            in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving
            your public relations. Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience
            in real time.
          </p>
          <Button text='See more' href='#' />
          <div className={styles.background}>
            <img src={require('@/public/images/bg_biography.svg')} height='866' width='627' />
          </div>
        </div>
      </div>
    </section>
  );
}
