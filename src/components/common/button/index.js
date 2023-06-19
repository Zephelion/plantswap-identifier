import styles from "./styles.module.scss";

export default function Button({ buttonId, label, clickAction}) {
  return (
    <button className={styles.button} id={buttonId} onClick={clickAction}>
      {label}
    </button>
  );
}