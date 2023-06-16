import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";
import NextButton from "@/components/next-button";

export const ScanFoto = ({ setFotos, updateStep, globalImage, setGlobalImage, }) => {
    const [image, setImage] = useState(globalImage?.data);
    const [createObjectURL, setCreateObjectURL] = useState(globalImage?.src);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = "/api/plants";

    const fetchPlant = async () => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch(API_URL, {
            method: "POST",
            body: formData,
        });
        const { data } = await res.json();

        setFotos(data.results);
        setGlobalImage({
            src: createObjectURL,
            data: image
        });
		updateStep((prev) => prev + 1);
        setIsLoading(false);
    };

    const handleImageChange = async (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file);
            setCreateObjectURL(URL.createObjectURL(file));
        }
    };
    
    return (
        <>
            {isLoading 
            ? <LoadingSpinner />
            : <section className={styles.identifier}>
                <h1>Capture plant</h1>
                <p>
                    Upload een foto van de plant en kom erachter om welke plant het precies gaat.
                </p>
                <FileInput
                    id="file"
                    handleFileChange={handleImageChange}
                    clearImage={setImage}
                    clearGlobalImage={setGlobalImage}
                    imageData={image}
                    imageSrc={createObjectURL}
                    label={image ? "nieuwe foto selecteren" : "Foto maken" }
                />  

                {image && <NextButton clickFunction={fetchPlant} label="Capture plant"/>}
            </section>
            }
        </>
    );
};
