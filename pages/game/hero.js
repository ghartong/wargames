import Head from 'next/head';
import HeroLayout from '../../components/layouts/heroLayout';
import CloseButton from '../../components/navigation/CloseButton';

import utils from '../../styles/utils.module.css';

export default function Hero(props) {
    console.log('here', props)
    const bob = JSON.parse(window.localStorage.getItem("hero"));

    return (
        <HeroLayout>
            <Head>
                <title>Hero Profile</title>
            </Head>
            <CloseButton />
            <h1 className={utils.headingXl}>Hero Profile</h1>
            <h2 className={utils.headingLg}>{bob.name} (lvl {bob.lvl})</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Might</td>
                        <td>{bob.might}</td>
                    </tr>
                    <tr>
                        <td>HP</td>
                        <td>???</td>
                    </tr>
                    <tr>
                        <td>XP</td>
                        <td>{bob.xp}</td>
                    </tr>
                </tbody>
            </table>
        </HeroLayout>
    );
};
