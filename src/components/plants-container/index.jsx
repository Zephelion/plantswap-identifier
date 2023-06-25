"use client"
import { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '@/utils/useDebounce'
import Plant from '../plant-card'
import SearchBar from '@/components/searchbar'
import Styles from './styles.module.scss'
import { LoadingSpinner } from '../loading/spinner'


const fetchPlants = async (search = '', isTaken = '') => {
    const data = await axios.get('/api/plants', {
        params: {
            search,
            is_taken: isTaken,
        }
    })
    return data.data
}

export default function PlantsContainer() {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isTaken, setIsTaken] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const search = useDebounce(searchTerm, 500)

    useEffect(() => {
        (async () => {
            const { data } = await fetchPlants()
            setPlants(data)
        })()
    }, []);

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const { data } = await fetchPlants(search, isTaken)
            setPlants(data)
            setIsLoading(false)
        })()
    }, [search, isTaken]);

    return (
        <>
            <div>
                <SearchBar input={searchTerm} setInput={setSearchTerm} setIsTaken={setIsTaken} />
                {
                    isLoading
                    ? <LoadingSpinner />
                    : <ul className={Styles.container}>
                        {plants.map(plant => (
                            <Plant key={plant.id} name={plant.name} image={plant.image} id={plant.id} />
                        ))}
                    </ul>
                }
            </div>
        </>
    )
}