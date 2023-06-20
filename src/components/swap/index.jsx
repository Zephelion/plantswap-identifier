import Image from 'next/image'
import Styles from './styles.module.scss'
import Button from '@/components/common/button'
import axios from 'axios'

export const Swap = ({ chosenPlant, name, image, swapItems }) => {
    
    const submitSwap = async () => {

        const { plant_in, plant_out } = swapItems
        await axios.post('/api/plants/swap', {
            plant_in,
            plant_out,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <section className={Styles.container}>
            <div className={Styles.inner}>
                <div className={Styles.plant}>
                    <div className={Styles.image}>
                        <Image src={image.src} alt={name} width={200} height={200} />
                    </div>
                    <span>{name.latin_name}</span>
                </div>

                <div className={Styles.icon}>
                    <Image src="/icons/swap.svg" alt="swap" width={50} height={50} />
                </div>


                <div className={Styles.chosen}>
                    <div className={Styles.image}>
                        { 
                            chosenPlant && chosenPlant.image && <Image src={chosenPlant.image} alt="Plant out image" width={200} height={200} />
                        }
                    </div>
                    <span>{chosenPlant.name}</span>
                </div>
            </div>
            {chosenPlant ? <Button buttonId="swap" label="Swap!" clickAction={submitSwap} /> : null}
        </section>
    )
}