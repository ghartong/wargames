import { useRouter } from 'next/router';
import styles from './buttons.module.css';

export default function CloseButton() {
    const router = useRouter()

    return (
        <div className={styles.closeContainer}>
            <button className={styles.closeButton} onClick={() => router.back()}>X</button>
        </div>
  );
}