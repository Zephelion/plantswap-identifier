import Styles from "./styles.module.scss";
import { useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";
import Result from "@/components/result";

export const FotoResults = async ({ results }) => {
    // const [result, setResult] = useState(null);

    console.log(results);

    const [activePlantId, setActivePlantId] = useState(null);

    const handleActive = () => {
        console.log("clicked");
        // setIsActive(!isActive);
    };

    // const fetchPlant = async () => {
    //     setIsLoading(true);
    //     console.log("fetching plant");

    //     const formData = new FormData();
    //     formData.append("image", image);
    //     const res = await fetch(API_URL, {
    //         method: "POST",
    //         body: formData,
    //     });
    //     const { data } = await res.json();
    //     console.log("data", data);

    //     setPlant(data);
    //     setIsLoading(false);
    //     setIsCapturing(false);
    // };

    return (
        <ul>
            {results.map((result => {
                const activePlant = result.gbif.id === activePlantId;
                console.log(activePlant);
                console.log(activePlantId);
                return <Result
                    key={result.gbif.id}
                    id={result.gbif.id}
                    name={result.species.scientificName}
                    image={result.images[0].url.m}
                    score={Math.round(result.score * 100)} 
                    setActive={setActivePlantId}
                    active={activePlant}
                />
            }))}
        </ul>
    );
};
