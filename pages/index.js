import Head from 'next/head';
import layoutStyles from '../styles/Layout.module.scss';

import Navigation from '../components/layout/Navigation';
import Presentation from '../components/sections/Presentation';
import Biography from '../components/sections/Biography';
import Services from '../components/sections/Services';
import Prices from '../components/sections/Prices';
import Newsletter from '../components/sections/Newsletter';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className={layoutStyles.app}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
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
