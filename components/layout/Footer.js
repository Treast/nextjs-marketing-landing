import React from 'react';
import Link from 'next/link';

import layoutStyles from '@/styles/Layout.module.scss';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.section}>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.grid}>
          <div className={styles.socials}>
            <img src={require('@/public/images/logo-white.svg')} width='111' height='67' />
            <h2>Stay in touch</h2>
            <ul>
              <li>
                <Link href='#'>
                  <img src={require('@/public/images/icons/facebook.svg')} width='9' height='18' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <img src={require('@/public/images/icons/google-plus.svg')} width='20' height='16' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <img src={require('@/public/images/icons/twitter.svg')} width='23' height='18' />
                </Link>
              </li>
              <li>
                <Link href='#'>
                  <img src={require('@/public/images/icons/instagram.svg')} width='17' height='17' />
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href='#'>About</Link>
              </li>
              <li>
                <Link href='#'>Home</Link>
              </li>
              <li>
                <Link href='#'>Pricing</Link>
              </li>
              <li>
                <Link href='#'>Location</Link>
              </li>
              <li>
                <Link href='#'>Office</Link>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3>Hours</h3>
            <ul>
              <li>
                <span>Monday</span> 9:00 - 18:00
              </li>
              <li>
                <span>Tuesday</span> 9:00 - 18:00
              </li>
              <li>
                <span>Wednesday</span> 9:00 - 18:00
              </li>
              <li>
                <span>Thursday</span> 9:00 - 18:00
              </li>
              <li>
                <span>Friday</span> 9:00 - 18:00
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <h3>Contact</h3>
            <ul>
              <li>
                <img src={require('@/public/images/icons/old-handphone.svg')} width='15' height='15' /> 000-000-0000
              </li>
              <li>
                <img src={require('@/public/images/icons/envelope.svg')} width='16' height='12' /> info@email.com
              </li>
              <li>
                <img src={require('@/public/images/icons/maps-and-flags.svg')} width='11' height='15' /> New York, US
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className={styles.background}>
        <Image src='/images/bg_footer.svg' width='1600' height='570' />
      </div> */}
    </footer>
  );
}
