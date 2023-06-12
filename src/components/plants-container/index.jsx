import { supabase } from '@/../lib/supabaseClient'
import Plant from '../plant-card'
import SearchBar from '@/components/searchbar'
import Styles from './styles.module.scss'

export async function fetchPlants() {
    let { data } = await supabase.from('cuttings').select()
    return data
}

const Plants = async () => {
    const plants = await fetchPlants();

    return (
        <>
            <SearchBar />
            <ul className={Styles.container}>
                {plants.map(plant => (
                    <Plant key={plant.id} name={plant.name} image={plant.image} />
                ))}
            </ul>
        </>
    )
}

export default Plants