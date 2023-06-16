import styles from "./styles.module.scss";

export default function Button({ buttonId, label}) {
  return (
    <button className={styles.button} id={buttonId}>
      {label}
    </button>
  );
}