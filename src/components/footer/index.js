// import Image from "next/image";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.nav}>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/plants">Planten</a></li>
                <li><a href="/plants/new">Toevoegen</a></li>
                <li><a href="/plants/take">Meenemen</a></li>
            </ul>
        </nav>
    </footer>
  );
}
