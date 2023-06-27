import Image from 'next/image'
import styles from './styles.module.scss'

const PlantAvailable = ({ plant, setChosenPlant }) => {
    
    const hasImage = plant.fotos && plant.fotos[0];
    const placeholder = '/images/placeholder.png';
    const image = {
        src: hasImage ? plant.fotos[0].url : placeholder,
        alt: hasImage ? `Foto van ${plant.naam}` : `Placeholder voor ${plant.naam}`,
        width: hasImage ? plant.fotos[0].width : 300,
        height: hasImage ? plant.fotos[0].height : 300,
    }

    const date = new Date(plant.createdAt)
    const createdAt = date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })

    return (
        <li
            className={styles.card} 
            onClick={() => setChosenPlant(plant)} 
            onKeyDown={(e) => e.key === 'Enter' ? setChosenPlant(plant) : null}
            aria-label={`Selecteer ${plant.naam}`}
            tabIndex={0}
        >
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={true} placeholder={placeholder} />
            <div>
                <h2>{plant.naam}</h2>
                <h3>{createdAt}</h3>
            </div>
        </li>
    )
}

export default PlantAvailable