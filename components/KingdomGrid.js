import { updateTimerCookie, buildCookie } from '../utils/timers';
import styles from './grid.module.css';

export default function KingdomGrid() {
    const handleStorage = () => {
        updateTimerCookie({method: 'add', asset: 'construction', buildingLvl: 1, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'research', buildingLvl: 1, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'gathering', buildingLvl: 3, heroLvl: 1});
        updateTimerCookie({method: 'add', asset: 'traveling', buildingLvl: 34, heroLvl: 41});
    };
    const deleteStorage = () => {
        updateTimerCookie({method: 'delete', asset: 'construction' });
    };

    return (
        <div className={styles.kingdomGrid}>
            <div className={styles.castleCell}>Castle</div>
            <div className={styles.armyCell}>
                Army
                <div>
                    <button onClick={handleStorage}>add</button>
                    <button onClick={deleteStorage}>delete</button>
                </div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
            </div>
            <div className={styles.resourceCell_1}>
                resource 1
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
            </div>
            <div className={styles.resourceCell_2}>
                resource 2
                <div>x</div>
                <div>x</div>
                <div>x</div>
                <div>x</div>
            </div>
        </div>
    );
};
