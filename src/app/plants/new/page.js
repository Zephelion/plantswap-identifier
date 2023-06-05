'use client';

import styles from "./page.module.css";
import { useState } from "react";
// import axios from "axios";

export default function Test() {

    const [ image, setImage ] = useState(null);
    const [ createObjectURL, setCreateObjectURL ] = useState(null);
    const [ plant, setPlant ] = useState(null);
    const [ isCapturing, setIsCapturing ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const API_URL = "/api/plants";

    const fetchPlant = async () => {
        console.log("fetching plant")

        const formData = new FormData();
        formData.append("image", image);
        const res = await fetch(API_URL, {
            method: "POST",
            body: formData
        })
        const { data } = await res.json();
        console.log("data", data)

        setPlant(data)
        setLoading(false)
        setIsCapturing(false);
    }

    const handleImageChange = async (e) => {
        console.log("handleImageChange")
        setIsCapturing(true);
        if (e.target.files && e.target.files[ 0 ]) {

            const file = e.target.files[0];
            setImage(file);
            setCreateObjectURL(URL.createObjectURL(file));
        }
    }

    return (
        <section className={styles.identifier}>
            <h1>Capture plant</h1>
            <input type="file" accept="image/*" capture="environment" onChange={(e) => handleImageChange(e)} />
            {/* <img src={createObjectURL} /> */}

            {image &&
                <button onClick={fetchPlant}>
                    Capture plant
                </button>
            }
            <div>
                {loading && isCapturing ? <p>Loading...</p> : <h2>{plant?.bestMatch}</h2>}
            </div>
        </section>
    )
}