import Plant from '../plant-card'
import SearchBar from '@/components/searchbar'
import Styles from './styles.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
    
    useEffect(() => {
        (async () => {
            const { data } = await fetchPlants()
            console.log(data)
            setPlants(data)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const { data } = await fetchPlants(searchTerm)
            setPlants(data)
        })()
    }, [searchTerm])

    return (
        <div>
            <SearchBar input={searchTerm} setInput={setSearchTerm}/>
            <ul className={Styles.container}>
                {plants.map(plant => (
                    <Plant key={plant.id} name={plant.name} image={plant.image} id={plant.id}/>
                ))}
            </ul>
        </div>
    )
}