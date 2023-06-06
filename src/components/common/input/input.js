import styles from "./styles.module.scss";

export default function Input({ type, id, placeholder }) {
    return (
        <input className={styles.input} type={type} id={id} placeholder={placeholder}/> 
    );
}