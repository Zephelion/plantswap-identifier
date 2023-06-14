import styles from "./styles.module.scss";
import { useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";

export const FotoResults = ({ results }) => {
    // const [result, setResult] = useState(null);

    {console.log("results", results)}

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
        console.log("data", data);

        setPlant(data);
        setIsLoading(false);
        setIsCapturing(false);
    };

    return (
        <div>
            {results.bestMatch}
        </div>
    );
};
