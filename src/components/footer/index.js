// import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.nav}>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/plants">Planten</Link></li>
                    <li><Link href="/plants/new">Toevoegen</Link></li>
                    <li><Link href="/plants/take">Meenemen</Link></li>
                </ul>
            </nav>
        </footer>
    );
}
