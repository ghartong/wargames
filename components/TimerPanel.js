import { useEffect, useState } from 'react';

import styles from './timers.module.css';

import CountdownTimer from './CountdownTimer';

const TimerPane = ({ timer, targetDate }) => {
    return (
        <div className={styles.pane}>
            <div className={styles.timer}>
                <CountdownTimer asset={timer} targetDate={targetDate} />
            </div>
            {timer}
        </div>
    );
};

const TimerPanel = () => {    
    const [timerCookies, setTimerCookies] = useState();

    useEffect(() => {
        setTimerCookies(JSON.parse(localStorage.getItem('timers')));
    }, []);

    useEffect(() => {
        window.addEventListener('timerStorage', () => {
            setTimerCookies(JSON.parse(localStorage.getItem('timers')));
        })
    }, []);

    return (
        <div className={styles.panel}>
            {timerCookies?.map(item => 
                <TimerPane key={item.name} timer={item.name} targetDate={item.targetDate} />
            )}
        </div>
    );
};

export default TimerPanel;
