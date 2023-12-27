import { useEffect, useState } from 'react';
import { updateTimerCookie } from '../utils/timers';
import LandingPad from './LandingPad';
import styles from './grid.module.css';

export default function KingdomGrid() {
    const [plots, setPlots] = useState([]);

    useEffect(() => {
        setPlots(JSON.parse(localStorage.getItem('plots')));
    }, []);

    useEffect(() => {
        window.addEventListener('plotStorage', () => {
            setPlots(JSON.parse(localStorage.getItem('plots')));
        })
    }, []);

    const handleStorage = () => {
        updateTimerCookie({method: 'add', asset: 'construction', buildingLvl: 1, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'research', buildingLvl: 1, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'gathering', buildingLvl: 3, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'traveling', buildingLvl: 34, heroLvl: 41});
    };
    const deleteStorage = () => {
        updateTimerCookie({method: 'delete', asset: 'construction' });
    };
    const deletePlotStorage = () => {
        window.localStorage.removeItem("plots");
        window.dispatchEvent(new Event("plotStorage"));
    };

    return (
        <div className={styles.kingdomGrid}>
            <div className={styles.castleCell}>Castle</div>
            <div className={styles.armyCell}>
                Army
                <div>
                    <button onClick={handleStorage}>add timers</button>
                    <button onClick={deleteStorage}>delete construction timer</button>
                    <button onClick={deletePlotStorage}>delete all plots</button>
                </div>
                <div>
                    <LandingPad plot={'army_1'} building={plots?.find(i => i.plot === 'army_1')?.building} />
                </div>
                <div>
                    <LandingPad plot={'army_2'} building={plots?.find(i => i.plot === 'army_2')?.building} />
                </div>
                <div>
                    <LandingPad plot={'army_3'} building={plots?.find(i => i.plot === 'army_3')?.building} />
                </div>
                <div>
                    <LandingPad plot={'army_4'} building={plots?.find(i => i.plot === 'army_4')?.building} />
                </div>
            </div>
            <div className={styles.resourceCell_1}>
                resource 1
                <div>
                    <LandingPad plot={'rss_1'} building={plots?.find(i => i.plot === 'rss_1')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_2'} building={plots?.find(i => i.plot === 'rss_2')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_3'} building={plots?.find(i => i.plot === 'rss_3')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_4'} building={plots?.find(i => i.plot === 'rss_4')?.building} />
                </div>
            </div>
            <div className={styles.resourceCell_2}>
                resource 2
                <div>
                    <LandingPad plot={'rss_5'} building={plots?.find(i => i.plot === 'rss_5')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_6'} building={plots?.find(i => i.plot === 'rss_6')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_7'} building={plots?.find(i => i.plot === 'rss_7')?.building} />
                </div>
                <div>
                    <LandingPad plot={'rss_8'} building={plots?.find(i => i.plot === 'rss_8')?.building} />
                </div>
            </div>
        </div>
    );
};
