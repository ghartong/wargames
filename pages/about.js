import Head from 'next/head';

import Layout from '../components/layouts/layout';

export default function About() {
    const title = "About War Games";

    return (
        <Layout about>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
        </Layout>
    );
  }