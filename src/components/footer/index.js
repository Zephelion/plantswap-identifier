// import Image from "next/image";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.nav}>
        <nav>
            <ul>
                <li>
                  <a href="/">
                    <img src="/icons/home.svg"></img>
                    <p>Home</p>
                  </a>
                </li>
                <li>
                  <a href="/plants">
                    <img src="/icons/plants.svg"></img>
                    <p>Planten</p>
                  </a>
                </li>
                <li>
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
