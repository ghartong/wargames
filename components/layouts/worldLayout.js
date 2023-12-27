import styles from './world.module.css';

export default function WorldLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
