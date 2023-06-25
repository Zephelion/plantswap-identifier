'use client';

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from "./styles.module.scss";
import axios from "axios";
import Plant from "@/components/plant-card-available";
import {Swap as SwapComponent} from "@/components/swap";
import MotionContainer from "@/components/common/motion";
import { LoadingSpinner } from "@/components/loading/spinner";
import Button from "@/components/common/button";
import Input from "@/components/common/input/input";
import LabelInput from "@/components/common/input/labelInput";

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

    const [collector, setCollector] = useState('');
    const [swapItems, setSwapItems] = useState({
        stekje_in: '',
        stekje_out: '',
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
        const { data: { data } } = await axios.post('/api/plants/plant', {
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

        if (onlyDonate) {
            redirect('/plants')
        } else {
            setOnlyDonate(false)
            setIsLoading(false)
            setSwapItems({
                stekje_in: data.id,
            })
        }
    }

    useEffect(() => {
        setSwapItems({
            ...swapItems,
            stekje_out: chosenPlant.id,
        })
    }, [chosenPlant])

    return (
        onlyDonate
            ?
            (
                <section className={styles.options}>
                    <div>
                        <Button clickAction={(e) => submitForm({ e, onlyDonate: true })}
                            label="Alleen doneren"
                        >
                        </Button>

                        <div>
                            <LabelInput updateValue={setCollector} label="Wie komt deze plant ophalen" id="collector" />
                            <Button clickAction={(e) => submitForm({ e, onlyDonate: false })}
                                label="Doneren en ruilen"
                            >
                            </Button>
                        </div>
                    </div>
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
                                <Plant key={plant.id} plant={plant} setChosenPlant={setChosenPlant} />
                            ))}
                        </ul>
                        }
                    </div>

                    <SwapComponent chosenPlant={chosenPlant} name={formDetails} image={image} swapItems={swapItems} collector={collector}/>
                </MotionContainer>
            )

    )
}