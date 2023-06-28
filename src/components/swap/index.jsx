import Image from 'next/image'
import Styles from './styles.module.scss'
import Button from '@/components/common/button'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { LoadingSpinner } from '../loading/spinner'
import { useState } from 'react'

export const ConfirmSwap = ({ chosenPlant, name, image, swapItems, collector }) => {
    const { push: redirect } = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const submitSwap = async () => {
        setIsLoading(true)
        const { stekje_in, stekje_out } = swapItems
        await axios.post('/api/plants/swap', {
            collector,
            stekje_in,
            stekje_out,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setIsLoading(false)
        redirect('/plants/success')
    }

    const hasImage = chosenPlant.fotos && chosenPlant.fotos[0];
    const placeholder = '/images/placeholder.png';
    const chosenImage = {
        src: hasImage ? chosenPlant.fotos[0].url : placeholder,
        alt: hasImage ? `Foto van ${chosenPlant.naam}` : `Placeholder voor ${chosenPlant.naam}`,
        width: hasImage ? chosenPlant.fotos[0].width : 300,
        height: hasImage ? chosenPlant.fotos[0].height : 300,
    }

    return (

        <section className={Styles.container}>
            {isLoading
                ? <LoadingSpinner />
                : <div className={Styles.inner}>
                    <div className={Styles.plant}>
                        <div className={Styles.image}>
                            <Image src={image.src} alt={name.naam} width={200} height={200} />
                        </div>
                        <span>{name.latijnsenaam}</span>
                    </div>

                    <div className={Styles.icon}>
                        <Image src="/icons/swap.svg" alt="swap" width={50} height={50} />
                    </div>


                    <div className={Styles.chosen}>
                        <div className={Styles.image}>
                            {
                                chosenPlant.fotos && <Image src={chosenImage.src} alt={chosenImage.alt} width={200} height={200} />
                            }
                        </div>
                        <span>{chosenPlant.naam}</span>
                    </div>
                </div>
            }
            {!isLoading && chosenPlant && collector && <Button buttonId="swap" label="Swap!" clickAction={submitSwap} />}
        </section>
    )
}