import Image from "next/image";
import Label from "../input/label";
import styles from "./styles.module.scss";
import MotionContainer from "../motion";

export default function FileInput({ id, handleFileChange, imageSrc, imageData, label, capture, children }) {

    return (
        <section className={styles.file}>
            {!imageSrc && !imageData
                ? <Label htmlFor={id} >

                    <span className={styles.file__icon}>
                        {children}
                    </span>

                    {label}
                    <input
                        id={id}
                        type="file"
                        accept="image/*"
                        capture={capture}
                        onChange={(e) => handleFileChange(e)}
                        aria-label={label}
                    />
                </Label>

                : <MotionContainer tag="section"> 
                    <Image src={imageSrc} width={100} height={100} alt="Add image icon" />
                </MotionContainer>
            }
        </section>
    );
}