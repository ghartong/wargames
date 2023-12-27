import styles from './resources.module.css';

const ResourcePane = ({ resource }) => {
    return (
        <div className={styles.pane}>
            <div className={styles.meter}>54%</div>
            {resource}
        </div>
    );
};

const ResourcePanel = () => {
    const rss = [ 'food', 'stone', 'wood', 'ore', 'gold' ];

    return (
        <div className={styles.panel}>
            {rss.map(item => <ResourcePane key={item} resource={item} />)} 
        </div>
    );
};

export default ResourcePanel;