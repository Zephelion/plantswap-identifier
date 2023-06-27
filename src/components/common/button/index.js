import styles from "./styles.module.scss";

export default function Button({ buttonId, label, clickAction, disabled = false}) {
  return (
    <button className={styles.button} id={buttonId} onClick={clickAction} disabled={disabled}>
      {label}
    </button>
  );
}