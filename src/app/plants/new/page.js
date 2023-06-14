'use client';

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { ScanFoto, FotoResults } from "@/components/form";
import MainLayout from "@/components/layouts/main-layout";
import MotionContainer from "@/components/common/motion";
export default function NewPlant() {
    
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(1);
    const [fotoResults, setFotoResults] = useState([]);

    useEffect(() => {
        setSteps([
            {
                title: "Scan foto 1",
                description: "Scan de foto van de plant",
                activeStep: 1,
                component: <ScanFoto setFotos={setFotoResults} updateStep={setActiveStep}/>
            },
            {
                title: "Scan foto 2",
                description: "Scan de foto van de plant",
                activeStep: 2,
                component: <FotoResults results={fotoResults}/>
            },
            {
                title: "Scan foto 3",
                description: "Scan de foto van de plant",
                activeStep: 3,
                component: <ScanFoto />
            },
        ])
    }, [fotoResults])

    return (
        <MainLayout>
            <section className={styles.form}>
                <ProgressBar 
                    count={steps.length} 
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                />
                

                {steps.map((step, index) => {
                    if (step.activeStep === activeStep) {
                        return (
                            <MotionContainer key={index} tag="section">
                                {step.component}
                            </MotionContainer>
                        )
                    }
                })}
            </section>
        </MainLayout>
    )
}