import styles from "./styles.module.scss";
import Button from "@/components/common/button";

export default function SubmitButton({ id, label = "Submit" }) {

    return (
        <Button buttonId={id} type="submit" className={styles.submit} label={label}/>    
    );
}