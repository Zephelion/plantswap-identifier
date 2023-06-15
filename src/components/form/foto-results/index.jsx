"use client"

import Styles from "./styles.module.scss";
import { useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";
import Result from "@/components/result";
import NextButton from "@/components/next-button";

export const FotoResults = ({ results, updateStep }) => {
    // const [result, setResult] = useState(null);

    const [activePlantId, setActivePlantId] = useState(null);

    return (
        <>
        <section className={Styles.results}>
            <div className={Styles.heading}>
                <h1>Resultaten</h1>{results.length > 1 ? <span>({results.length} planten gevonden)</span> : <span>({results.length} plant gevonden)</span>}
            </div>
            <p>Hier zijn de resultaten van de planten die het meest overeen komen</p>
            <ul>
                {results.map((result => {
                    const activePlant = result.gbif.id === activePlantId;
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
            {activePlantId ? <NextButton clickFunction={updateStep} /> : null}
        </section>
        
        </>
    );
};
