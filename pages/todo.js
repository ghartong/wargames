import Head from 'next/head';

import Layout from '../components/layouts/layout';

export default function Todo() {
    const title = "To Dos";

    return (
        <Layout todo>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <ul>
                <li>Resources
                    <ul>
                        <li>wood</li>
                        <li>food</li>
                        <li>ore</li>
                        <li>money</li>
                        <li>stone</li>
                        <li>energy (for hunting monsters)</li>
                    </ul>
                </li>
                <li>components
                    <ul>
                        <li>screens
                            <ul>
                                <li>home (kingdom)</li>
                                <li>map (world)</li>
                                <li>hero profile</li>
                            </ul>
                        </li>
                        <li>game pieces
                            <ul>
                                <li>kingdom
                                    <ul>
                                        <li>castle</li>
                                        <li>lumber mill</li>
                                        <li>farm</li>
                                        <li>mine</li>
                                        <li>query</li>
                                    </ul>
                                </li>
                                <li>map
                                    <ul>
                                        <li>kingdom</li>
                                        <li>monsters</li>
                                        <li>resource pits</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>Timers
                    <ul>
                        <li>overall
                            <ul>
                                <li>used for offline calc of resources etc</li>
                            </ul>
                        </li>
                        <li>resource auto generate</li>
                        <li>resource gathering</li>
                        <li>monster lifespan</li>
                        <li>travel</li>
                    </ul>
                </li>
            </ul>
        </Layout>
    );
  }