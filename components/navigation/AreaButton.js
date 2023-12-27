import Link from 'next/link';
import styles from './buttons.module.css';

export default function AreaButton(props) {
    const { currentArea } = props;

    return (
        <div className={styles.areaContainer}>
        {currentArea === "kingdom" ?
            <Link href="/game/world">to World</Link>
        :
            <Link href="/game/kingdom">to Kingdom</Link>
        }
        </div>
  );
}