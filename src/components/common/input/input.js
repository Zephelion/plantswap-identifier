import { useRef } from "react";
import styles from "./styles.module.scss";

export default function Input({ type, id, placeholder, value, updateForm, required = false }) {

    const inputRef = useRef();
    
    return (
        <input
            className={styles.input}
            type={type}
            id={id}
            placeholder={placeholder}
            ref={inputRef}
            onChange={() => updateForm(inputRef.current.value, id)} 
            value={value} 
            required={required}
        />
    );
}