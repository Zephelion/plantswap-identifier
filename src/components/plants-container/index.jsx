import { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '@/utils/useDebounce'
import Plant from '../plant-card'
import SearchBar from '@/components/searchbar'
import Styles from './styles.module.scss'
import { LoadingSpinner } from '../loading/spinner'

const fetchPlants = async (search = '', isAvailable = null) => {
    const data = await axios.get('/api/plants', {
        params: {
            search,
            available: isAvailable,
        }
    })
    return data.data
}

export default function PlantsContainer() {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isAvailable, setIsAvailable] = useState(null)
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
            const { data } = await fetchPlants(search, isAvailable)
            setPlants(data)
            setIsLoading(false)
        })()
    }, [search, isAvailable]);

    return (
        <>
            <div>
                <SearchBar input={searchTerm} setInput={setSearchTerm} setIsAvailable={setIsAvailable} />
                {
                    isLoading
                    ? <LoadingSpinner />
                    : <ul className={Styles.container}>
                        {plants.length 
                            ? plants.map(plant => (
                                <Plant key={plant.id} plant={plant} />
                            ))
                            : <p>No results found</p>
                        }
                    </ul>
                }
            </div>
        </>
    )
}