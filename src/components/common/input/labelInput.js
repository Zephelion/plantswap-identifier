import Input from "./input";
import Label from "./label";
import styles from "./styles.module.scss";

export default function LabelInput({ label, id,  updateValue, placeholder = label}) {
    return (
		<Label htmlFor={id} className={styles.labelInput}>
            {label}
            <Input updateForm={updateValue} id={id} placeholder={placeholder}/>
		</Label>
    );
}
