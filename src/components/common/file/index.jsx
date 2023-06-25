"use client"
import Image from "next/image";
import Label from "../input/label";
import styles from "./styles.module.scss";
import MotionContainer from "../motion";

export default function FileInput({ id, handleFileChange, clearImage, clearGlobalImage, imageSrc, imageData, label }){

    const clearImages = () => {
        setShowImage(false);
        clearImage(null);
        clearGlobalImage(null);
    };

    return (
        <section className={styles.file}>
            {!imageSrc && !imageData 
            ? <Label htmlFor={id} >
                
                <span className={styles.file__icon}>
                    +
                </span>
                
                {label}
                <input
                    id={id}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={(e) => handleFileChange(e)}
                    />
            </Label>

            : <MotionContainer tag="section">
                    <Image src={imageSrc} width={100} height={100} alt="Add image icon"/>
               </MotionContainer>
            }
        </section>
    );
}