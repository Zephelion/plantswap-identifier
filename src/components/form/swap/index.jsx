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
import { useSearchParams } from 'next/navigation';

const API_URL = "/api/plants/plant";
const fetchChosenPlant = async (id) => {

    const data = await axios.get(`/api/plants/plant`, {
        params: {
            id
        }
    })
    return data.data
}

export const Swap = ({
    formDetails,
    formTips,
    image,
    uploadImg,
}) => {

    const searchParams = useSearchParams();
    const id = searchParams.get('id');

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
            const { data: plants } = await fetchPlants()
            setPlants(plants)
            
            if(id){
                const { data: fetchedChosenPlant } = await fetchChosenPlant(id)
                setChosenPlant(fetchedChosenPlant)
                setSwapItems({
                    ...swapItems,
                    stekje_out: fetchedChosenPlant.id,
                })
            }

            setIsLoading(false)
        })()
    }, [id]);

    const submitForm = async ({ e, onlyDonate }) => {

        e.preventDefault();
        setIsLoading(true)
        
        const formData = new FormData();
        formData.append("plant_id", chosenPlant.id);
        formData.append("only_donate", onlyDonate);
        formData.append("form_details", JSON.stringify(formDetails));
        formData.append("form_tips", JSON.stringify(formTips));
        formData.append("upload_img", uploadImg);

        const { data: { data } } = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (onlyDonate) {
            redirect('/plants')
        } else {
            setOnlyDonate(false)
            setIsLoading(false)
            setSwapItems({
                ...swapItems,
                stekje_in: data.id,
            })
        }
    }

    useEffect(() => {
        setSwapItems({
            ...swapItems,
            stekje_out: chosenPlant.id,
        })
    }, [chosenPlant, setSwapItems])

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
                            <LabelInput updateValue={setCollector} label="Wie komt een plant ruilen" id="collector" placeholder="Vul een naam in" />
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