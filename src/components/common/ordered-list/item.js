// import Image from "next/image";
import styles from "./styles.module.scss";

export default function List({ children }) {
    return (
        <li className={styles.item}>
            {children}
        </li>
    );
}
