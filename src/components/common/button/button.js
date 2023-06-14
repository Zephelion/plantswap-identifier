import styles from "./styles.module.scss";

export default function Button({ buttonId }) {
    return (
		<button className={styles.button} id={buttonId}>Volgende</button>
    );
}