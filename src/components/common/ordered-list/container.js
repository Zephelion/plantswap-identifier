// import Image from "next/image";
import styles from "./styles.module.scss";

export default function ListItem({ children }) {
    return (
        <ol className={styles.container}>
            {children}
        </ol>
    );
}
