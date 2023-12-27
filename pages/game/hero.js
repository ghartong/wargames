import Head from 'next/head';
import HeroLayout from '../../components/layouts/heroLayout';
import CloseButton from '../../components/navigation/CloseButton';

import utils from '../../styles/utils.module.css';

export default function Hero(props) {
    console.log('here', props)
    return (
        <HeroLayout>
            <Head>
                <title>Hero Profile</title>
            </Head>
            <CloseButton />
            <h1 className={utils.headingXl}>Hero Profile</h1>
            <h2 className={utils.headingLg}>Bob (lvl 4)</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Might</td>
                        <td>39395</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>95</td>
                    </tr>
                    <tr>
                        <td>XP</td>
                        <td>39395</td>
                    </tr>
                </tbody>
            </table>
        </HeroLayout>
    );
};
