import Head from 'next/head';
import WorldLayout from '../../components/layouts/worldLayout';
import AreaButton from '../../components/navigation/areaButton';
import HeroButton from '../../components/navigation/HeroButton';
import ResourcePanel from '../../components/ResourcePanel';
import TimerPanel from '../../components/TimerPanel';

export default function World() {
    return (
        <WorldLayout>
            <Head>
                <title>The World</title>
            </Head>
            <HeroButton />
            <ResourcePanel />
            <TimerPanel />
            <AreaButton currentArea={'world'} />
        </WorldLayout>
    );
};
