import Link from 'next/link';
import styles from './buttons.module.css';

export default function HeroButton() {
    return (
        <div className={styles.heroContainer}>
            <Link href="/game/hero">Hero Profile</Link>
        </div>
  );
}