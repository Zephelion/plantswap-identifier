import Image from "next/image";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "@/components/loading/spinner";
import Plant from "@/components/plant-card-available";
import SwapComponent from "@/components/swap";

export const Swap = ({
    formDetails,
    formTips,
    image,
}) => {

    const [plants, setPlants] = useState([]);
    const [chosenPlant, setChosenPlant] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const fetchPlants = async (search = '', isTaken = 'false') => {
        const data = await axios.get('/api/plants', {
            params: {
                search,
                is_taken: isTaken,
            }
        })
        return data.data
    }

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const { data } = await fetchPlants()
            setPlants(data)
            setIsLoading(false)
        })()
    }, []);

    console.log(chosenPlant)

    
	return (
        <>
            <div>
                <div className={styles.heading}>
                    <div className={styles.title}>
                        <h1>Doneren/ruilen</h1>{plants.length > 1 ? <span>({plants.length} planten beschikbaar)</span> : <span>({plants.length} plant beschikbaar)</span>}
                    </div>
                    <p>Selecteer een plant waarmee u wilt ruilen</p>
                </div>
                {isLoading ? <LoadingSpinner /> : <ul className={styles.container}>
                    {plants.map(plant => (
                        <Plant key={plant.id} name={plant.name} image={plant.image} id={plant.id} chosenPlant={setChosenPlant} />
                    ))}
                    </ul>
                }
            </div>

            <SwapComponent chosenPlant={chosenPlant} name={formDetails} image={image}/>
        </>

	)
}