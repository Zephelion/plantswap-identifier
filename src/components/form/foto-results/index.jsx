"use client"

import Styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import FileInput from "@/components/common/file";
import { LoadingSpinner } from "@/components/loading/spinner";
import Result from "@/components/result";
import NextButton from "@/components/next-button";

export const FotoResults = ({ results, updateStep, setIdentifiedPlant, identifiedPlant }) => {

    const [activePlant, setActivePlant] = useState(identifiedPlant);

    const goToNextStep = () => {
        setIdentifiedPlant(activePlant);
        updateStep((prev) => prev + 1);
    };
    
    return (
        <>
        <section className={Styles.results}>
            <div className={Styles.heading}>
                <h1>Resultaten</h1>{results.length > 1 ? <span>({results.length} planten gevonden)</span> : <span>({results.length} plant gevonden)</span>}
            </div>
            <p>Hier zijn de resultaten van de planten die het meest overeen komen</p>
            <ul>
                {results.map((result => {
                    const isActivePlant = activePlant && activePlant?.gbif?.id === result.gbif.id;
                    return <Result
                        key={result.gbif.id}
                        item={result}
                        setActive={setActivePlant}
                        active={isActivePlant}
                    />
                }))}
            </ul>
            {activePlant
             ? <NextButton clickFunction={goToNextStep} /> : null}
        </section>
        
        </>
    );
};
