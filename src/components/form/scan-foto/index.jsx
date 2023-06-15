import styles from "./styles.module.scss";
import { useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";

export const ScanFoto = ({ setFotos, updateStep }) => {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [plant, setPlant] = useState(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const API_URL = "/api/plants";

    const fetchPlant = async () => {
        setIsLoading(true);
        console.log("fetching plant");

        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch(API_URL, {
            method: "POST",
            body: formData,
        });
        const { data } = await res.json();
        // console.log("data", data.results);

        // setPlant(data);
        setFotos(data.results);
        updateStep(2);
        setIsLoading(false);
        setIsCapturing(false);
    };

    const handleImageChange = async (e) => {
        console.log("handleImageChange");
        setIsCapturing(true);
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            console.log("file", file);
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

                {
                    isCapturing && !image
                    ? <p>Bezig met het identificeren van de plant...</p>
                    : <FileInput
                        id="file"
                        handleFileChange={handleImageChange}
                        src={createObjectURL}
                        image={image}
                        label="Foto maken"
                    />  
                }

                {image && <button onClick={fetchPlant}>Capture plant</button>}
            </section>
            }
        </>
    );
};
