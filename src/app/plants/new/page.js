'use client';

import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { ScanFoto, FotoResults, Details, Tips, Swap } from "@/components/form";
import MainLayout from "@/components/layouts/main-layout";
import MotionContainer from "@/components/common/motion";

export default function NewPlant() {

    const [steps, setSteps] = useState([]);
    const [activeStep, setActiveStep] = useState(1);

    const [image, setImage] = useState({
        src: "",
        data: null
    });
    const [uploadImg, setUploadImg] = useState(null);

    const [fotoResults, setFotoResults] = useState([]);
    const [identifiedPlant, setIdentifiedPlant] = useState({});
    const [formDetails, setFormDetails] = useState({});
    const [formTips, setFormTips] = useState({});

    useEffect(() => {
        setSteps([
            {
                title: "Foto",
                description: "Scan de foto van de plant",
                activeStep: 1,
                component: <ScanFoto setFotos={setFotoResults} updateStep={setActiveStep} setGlobalImage={setImage} globalImage={image} setUploadImg={setUploadImg}/>
            },
            {
                title: "Resultaten",
                description: "See the results of the scan",
                activeStep: 2,
                component: <FotoResults results={fotoResults} updateStep={setActiveStep} identifiedPlant={identifiedPlant} setIdentifiedPlant={setIdentifiedPlant}/>
            },
            {
                title: "Details",
                description: "Fill in the form with the results data",
                activeStep: 3,
                component: <Details setDetails={setFormDetails} formDetails={formDetails} updateStep={setActiveStep} identifiedPlant={identifiedPlant}/>
            },
            {
                title: "Tips",
                description: "Fill in the form guidelines",
                activeStep: 4,
                component: <Tips setTips={setFormTips} formTips={formTips} updateStep={setActiveStep}/>
            },
            {
                title: "Ruilen",
                description: "Swap view",
                activeStep: 5,
                component: 
                <Swap formDetails={formDetails} formTips={formTips} image={image} uploadImg={uploadImg} />
            }
        ])
    }, [fotoResults, formDetails, formTips, image, identifiedPlant, uploadImg])

    return (
        <MainLayout>
            <header>
                <h1>Doneren/ruilen</h1>
            </header>
            <section className={styles.form}>
                <ProgressBar
                    count={steps.length}
                    steps={steps}
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