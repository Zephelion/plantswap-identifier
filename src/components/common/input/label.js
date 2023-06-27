import Styles from "./styles.module.scss";

export default function Label({ children, labelFor }) {
    return (
		<label className={Styles.label} htmlFor={labelFor}>
			{children}
		</label>
    );
}
