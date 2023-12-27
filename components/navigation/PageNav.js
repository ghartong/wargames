import navStyles from './pageNav.module.css';

import Link from 'next/link';

export default function PageNav(props) {
    const { page } = props;

    return (
    <nav className={navStyles.navBox}>
        <Link href="/">Home</Link>
        <Link href="/about" className={page === '/about' ? navStyles.active : undefined}>About War Games</Link>
        <Link href="/todo" className={page === '/todo' ? navStyles.active : undefined}>To Dos</Link>
        <Link href="/game/kingdom">Start</Link>
   </nav>
  );
}