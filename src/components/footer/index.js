
'use client';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import Link from "next/link";



export default function Footer() {
  const route = usePathname();
  return (
    <footer className={styles.nav}>
      <nav>
        <ul>
          <li className={route === '/' ? styles.active : ''}>
            <Link href="/">
              <img src="/icons/home.svg"></img>
              <p>Home</p>
            </Link>
          </li>
          <li className={route === '/plants' ? styles.active : ''}>
            <Link href="/plants">
              <img src="/icons/plants.svg"></img>
              <p>Planten</p>
            </Link>
          </li>
          <li className={route === '/plants/new' ? styles.active : ''}>
            <Link href="/plants/new">
              <img src="/icons/add.svg"></img>
              <p>Doneer/ruil</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
