"use client"

import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  const route = usePathname();
  return (
    <footer className={styles.nav}>
      <nav>
        <ul>
          <li className={route === '/' ? styles.active : ''}>
            <Link href="/">
              <Image src="/icons/home.svg" width={30} height={30} alt="Afbeelding voor home link"/>
              <p>Home</p>
            </Link>
          </li>
          <li className={route === '/plants' ? styles.active : ''}>
            <Link href="/plants">
              <Image src="/icons/plants.svg" width={30} height={30} alt="Afbeelding voor planten link"/>
              <p>Planten</p>
            </Link>
          </li>
          <li className={route === '/plants/new' ? styles.active : ''}>
            <Link href="/plants/new">
              <Image src="/icons/add.svg" width={30} height={30} alt="Afbeelding voor ruilen en doneren link"/>
              <p>Doneer/ruil</p>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
