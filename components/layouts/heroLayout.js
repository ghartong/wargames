import styles from './hero.module.css';

export default function HeroLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};
