import styles from "./styles.module.scss";

export default function Input({ type }) {
    return (
        <input className={styles.Input} type={type}/> 
    );
}