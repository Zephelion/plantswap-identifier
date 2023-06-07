'use client';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

export default function Footer() {
  const route =  usePathname();
  console.log(route);
  return (
    <footer className={styles.nav}>
      <nav>
        <ul>
          <li className={route === '/' ? styles.active : ''}>
            <a href="/">
              <img src="/icons/home.svg"></img>
              <p>Home</p>
            </a>
          </li>
          <li className={route === '/plants' ? styles.active : ''}>
            <a href="/plants">
              <img src="/icons/plants.svg"></img>
              <p>Planten</p>
            </a>
          </li>
          <li className={route === '/plants/new' ? styles.active : ''}>
            <a href="/plants/new">
              <img src="/icons/add.svg"></img>
              <p>Doneer/ruil</p>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
