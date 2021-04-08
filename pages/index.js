import { useRef, useEffect } from 'react';
import Head from 'next/head';
import Scrollbar from 'smooth-scrollbar';

import { useRouter } from 'next/router';

import layoutStyles from '@/styles/Layout.module.scss';

import Navigation from '@/components/layout/Navigation';
import Presentation from '@/components/sections/Presentation';
import Biography from '@/components/sections/Biography';
import Services from '@/components/sections/Services';
import Prices from '@/components/sections/Prices';
import Newsletter from '@/components/sections/Newsletter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const router = useRouter();

  const bodyRef = useRef(null);

  useEffect(() => {
    Scrollbar.init(bodyRef.current, {
      damping: 0.08,
    });
  }, []);

  return (
    <div data-scrollbar className={layoutStyles.app} ref={bodyRef}>
      <Head>
        <title>NextJS - Marketing Landing</title>
        <link rel='icon' href={`${router.basePath}/favicon.ico`} />
      </Head>
      <Navigation />
      <Presentation />
      <Biography />
      <Services />
      <Prices />
      <Newsletter />
      <Footer />
    </div>
  );
}
