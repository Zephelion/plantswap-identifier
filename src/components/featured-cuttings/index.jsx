"use client"

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import PlantCard from '@/components/plant-card';
import axios from 'axios';
import { LoadingSpinner } from '../loading/spinner';
import MotionContainer from '../common/motion';


const getPlants = async (limit) => {
    const data = await axios.get('/api/plants/featured', {
        params: {
            limit
        }
    });

    return data.data;
}

const FeaturedCuttings = ({ limit = 6 }) => {

    const [featuredCuttings, setFeaturedCuttings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { data } = await getPlants(limit);
            setFeaturedCuttings(data);
            setIsLoading(false);
        })();
    }, [limit]);

    return (
        <div className={styles.featured}>
            {isLoading
                ? <LoadingSpinner />
                : <MotionContainer tag='ul' >
                    {featuredCuttings.map((plant, index) => (
                        <PlantCard key={index} plant={plant} />
                    ))}
                </MotionContainer>
            }
        </div>
    )
}

export default FeaturedCuttings;
