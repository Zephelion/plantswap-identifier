import Image from "next/image";
import Label from "../input/label";
import styles from "./styles.module.scss";
import MotionContainer from "../motion";

export default function FileInput({ id, handleFileChange, imageSrc, imageData, label }){

    return (
        <section className={styles.file}>
            <Label htmlFor={id} >
                {!showImage && 
                    <span className={styles.file__icon}>
                        +
                    </span>
                }
                {label}
                <input
                    id={id}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={(e) => handleFileChange(e)}
                    />
            </Label>
            {imageSrc && imageData && 
                <MotionContainer tag="section">
                    <Image src={imageSrc} width={100} height={100} alt=""/>
                    <div>
                        <p>{imageData.name}</p>
                        <p>({((imageData.size / 1000).toFixed(2))}kb)</p>
                    </div>
                    <button onClick={clearImages}>x</button>
                </MotionContainer>
            }
        </section>
    );
}