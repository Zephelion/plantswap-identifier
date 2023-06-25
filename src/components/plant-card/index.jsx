import Image from "next/image";
import Styles from "./styles.module.scss";
import Link from "next/link";

const Plant = ({ plant }) => {
    
    const hasImage = plant.fotos && plant.fotos[0];
    const placeholder = '/images/placeholder.png';
    const image = {
        src: hasImage ? plant.fotos[0].url : placeholder,
        alt: hasImage ? `Foto van ${plant.naam}` : `Placeholder voor ${plant.naam}}`,
        width: hasImage ? plant.fotos[0].width : 300,
        height: hasImage ? plant.fotos[0].height : 300,
    }

    const date = new Date(plant.createdAt)
    const createdAt = date.toLocaleDateString('nl-NL', {day: 'numeric', month: 'long', year: 'numeric'})

    return (
        <li className={Styles.card}>
            <Link href={`/plants/plant/${plant.slug}/${plant.id}`}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    priority={true}
                    placeholder={placeholder}
                    quality={60}
                />
                <div>
                    <h2>{plant.naam}</h2>
                    <h3>{createdAt}</h3>
                </div>
            </Link>
        </li>
    )
}

export default Plant