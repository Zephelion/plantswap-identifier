'use client';

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { ScanFoto } from "@/components/form/scan-foto";
import MainLayout from "@/components/layouts/main-layout";

export default function NewPlant() {
    
    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(1);

    useEffect(() => {
        setSteps([
            {
                title: "Scan foto 1",
                description: "Scan de foto van de plant",
                activeStep: 1,
                component: <ScanFoto />
            },
            {
                title: "Scan foto 2",
                description: "Scan de foto van de plant",
                activeStep: 2,
                component: <ScanFoto />
            },
            {
                title: "Scan foto 3",
                description: "Scan de foto van de plant",
                activeStep: 3,
                component: <ScanFoto />
            },
        ])
    }, [])

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
                            <div key={index}>
                                <h2>{step.title}</h2>
                                {step.component}
                            </div>
                        )
                    }
                })}
            </section>
        </MainLayout>
    )
}