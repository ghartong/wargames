import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layouts/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to War Games</p>
      </section>
      <section>
        <ul className={utilStyles.list}>
          <li><Link href="/about">About War Games</Link></li>
          <li><Link href="/todo">To Dos</Link></li>
          <li><Link href="/game/kingdom">Start</Link></li>
        </ul>        
      </section>
    </Layout>
  );
}