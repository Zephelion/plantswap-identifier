import styles from "./styles.module.scss";

export default function Label({ children, labelFor }) {
    return (
		<label className={styles.label} htmlFor={labelFor}>
			{children}
		</label>
    );
}
