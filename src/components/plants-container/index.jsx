import { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '@/utils/useDebounce'
import Plant from '../plant-card'
import SearchBar from '@/components/searchbar'
import Styles from './styles.module.scss'
import { LoadingSpinner } from '../loading/spinner'


const fetchPlants = async (search = '') => {
    const data = await axios.get('/api/plants', {
        params: {
            search
        }
    })
    return data.data
}

export default function PlantsContainer() {
    const [plants, setPlants] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const search = useDebounce(searchTerm, 500)

    useEffect(() => {
        (async () => {
            const { data } = await fetchPlants()
            console.log(data)
            setPlants(data)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const { data } = await fetchPlants(search)
            setPlants(data)
            setIsLoading(false)
        })()
    }, [search])

    return (
        <>
            { isLoading 
            ? <LoadingSpinner /> 
            : <div>
                <SearchBar input={searchTerm} setInput={setSearchTerm} />
                <ul className={Styles.container}>
                    {plants.map(plant => (
                        <Plant key={plant.id} name={plant.name} image={plant.image} id={plant.id} />
                    ))}
                </ul>
            </div>
            }
        </>
    )
}