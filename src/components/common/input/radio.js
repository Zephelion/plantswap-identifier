import Label from "./label";
import styles from "./styles.module.scss";

export default function Radio({ id, name, label, updateChange, value }) {
    return (
        <Label labelFor={id} className={styles.radio}>
            {label}
            <input 
                type="radio" 
                id={id} 
                name={name} 
                onInput={(e) => {
                    updateChange(value)
                }} 
                defaultChecked={value}
            />
        </Label>
    );
}