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
                    // console.log(e);
                    // console.log(e.target.value);
                    // const val = e.target.value === "on" ? true : false; 
                    // console.log(val);
                    // updateChange(val)
                    console.log(value);
                    updateChange(value)
                }} 
            />
        </Label>
    );
}