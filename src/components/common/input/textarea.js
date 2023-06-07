import styles from "./styles.module.scss";

export default function Textarea({ children }) {
    return (
		<textarea className={styles.textarea}>
			{children}
		</textarea>
    );
}