import styles from "./styles.module.scss";

export default function Textarea({ children, placeholder }) {
    return (
		<textarea className={styles.textarea} placeholder={placeholder}>
			{children}
		</textarea>
    );
}