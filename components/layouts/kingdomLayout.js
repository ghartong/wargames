import styles from './kingdom.module.css';

export default function KingdomLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
