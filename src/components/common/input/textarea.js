import { useRef } from "react";
import styles from "./styles.module.scss";

export default function Textarea({ children, placeholder, updateForm, id }) {

    const inputRef = useRef();

    return (
		<textarea className={styles.textarea} id={id} placeholder={placeholder} ref={inputRef} onChange={() => updateForm(inputRef.current.value, id)}>
			{children}
		</textarea>
    );
}