"use client"
import Image from "next/image";
import Label from "../input/label";
import styles from "./styles.module.scss";
import MotionContainer from "../motion";

export default function FileInput({ id, handleFileChange, updateImage, src, image, label }){
    return (
        <section className={styles.file}>
            <Label htmlFor={id} >
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
            
            {image && 
                <MotionContainer tag="section">
                    <Image src={src} width={100} height={100} alt=""/>
                    <div>
                        <p>{image.name}</p>
                        <p>({((image.size / 1000).toFixed(2))}kb)</p>
                    </div>
                    <button onClick={console.log('test')}>x</button>
                </MotionContainer>
            }
        </section>
    );
}