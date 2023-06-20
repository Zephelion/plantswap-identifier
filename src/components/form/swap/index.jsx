'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "./styles.module.scss";
import axios from "axios";
import Plant from "@/components/plant-card-available";
import {Swap as SwapComponent} from "@/components/swap";
import MotionContainer from "@/components/common/motion";
import { LoadingSpinner } from "@/components/loading/spinner";

export const Swap = ({
    formDetails,
    formTips,
    image,
}) => {

    const { push: redirect } = useRouter();

    const [plants, setPlants] = useState([]);
    const [chosenPlant, setChosenPlant] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [onlyDonate, setOnlyDonate] = useState(true);
    const [swapItems, setSwapItems] = useState({
        plant_in: '',
        plant_out: '',
    });

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

    const submitForm = async ({ e, onlyDonate }) => {

        e.preventDefault();
        setIsLoading(true)
        const { data: { data} } = await axios.post('/api/plants/plant', {
            plant_id: chosenPlant.id,
            only_donate: onlyDonate,
            form_details: formDetails,
            form_tips: formTips,
            image,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        console.log(data)

        if (onlyDonate) {
            redirect('/plants')
        } else {
            setOnlyDonate(false)
            setIsLoading(false)
            setSwapItems({
                plant_in: data.id,
            })
        }
    }

    useEffect(() => {
        setSwapItems({
            ...swapItems,
            plant_out: chosenPlant.id,
        })
    }, [chosenPlant])


    return (
        onlyDonate
            ?
            (
                <section>
                    <h2>Swap</h2>
                    <button onClick={(e) => submitForm({ e, onlyDonate: true })}>
                        Only donate
                    </button>
                    <button onClick={(e) => submitForm({ e, onlyDonate: false })}>
                        Swap for another plant
                    </button>
                </section>
            )

            : (
                <MotionContainer>
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

                    <SwapComponent chosenPlant={chosenPlant} name={formDetails} image={image} swapItems={swapItems}/>
                </MotionContainer>
            )

    )
}