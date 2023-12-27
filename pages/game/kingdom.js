import Head from 'next/head';
import KingdomLayout from '../../components/layouts/kingdomLayout';
import AreaButton from '../../components/navigation/areaButton';
import HeroButton from '../../components/navigation/HeroButton';
import ResourcePanel from '../../components/ResourcePanel';
import TimerPanel from '../../components/TimerPanel';

import KingdomGrid from '../../components/KingdomGrid';

export default function Kingdom() {
    return (
        <KingdomLayout>
            <Head>
                <title>My Kingdom</title>
            </Head>
            <HeroButton />
            <ResourcePanel />
            <TimerPanel />
            <AreaButton currentArea={'kingdom'} />
            <KingdomGrid />
        </KingdomLayout>
    );
};
