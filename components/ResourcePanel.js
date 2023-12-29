import { useEffect, useState, useRef } from 'react';
import styles from './resources.module.css';
import { updateRssCookie, rssConversion, calculateAmounts } from '../utils/resources';

const ResourcePane = ({ rss, rssCookies }) => {
    let resource = {};
    if (rssCookies && Array.isArray(rssCookies)) {
       resource = rssCookies.find(i => i.name === rss);
    }
 
    return (
        <div className={styles.pane}>
            <div className={styles.meter}>{resource?.amount || 0}</div>
            {rss}
        </div>
    );
};

const ResourcePanel = () => {
    const [rssCookies, setRssCookies] = useState({});
    const ref = useRef(null);

    // add up resouce totals every x seconds
    useEffect(() => {
        ref.current = setInterval(calculateAmounts, 30 * 1000);

        // clean up interval on unload
        return () => {
            if(ref.current){
            clearInterval(ref.current)
            }
        }
    }, [])

    // add new resource cookies if they don't exist 
    // or populate amounts on load before interval starts
    useEffect(() => {
        updateRssCookie();
    }, []);

    // get the rss cookies on load
    useEffect(() => {
        setRssCookies(JSON.parse(localStorage.getItem('resources')));
    }, []);

    // get the rss cookies on window event (for changes to cookies)
    useEffect(() => {
        window.addEventListener('rssStorage', () => {
            setRssCookies(JSON.parse(localStorage.getItem('resources')));
        })
    }, []);

    return (
        <div className={styles.panel}>
            {Object.keys(rssConversion).map((rss) =>
                <ResourcePane key={rss} rss={rssConversion[rss]} rssCookies={rssCookies} />
            )}
        </div>
    );
};

export default ResourcePanel;
