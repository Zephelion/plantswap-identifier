import Image from 'next/image';
import Styles from './styles.module.scss'

const Result = ({ item, active, setActive }) => {

    const handleActive = () => {
        setActive(item);
    }

    const score = Math.round(item.score * 100);

    const styles = `${Styles.result} ${active ? Styles.active : ""}`;
    return (
        <li className={styles} onClick={() => handleActive()}>
            <div className={Styles.information} >
                {item.images[0]
                    ? <Image src={item.images[0].url.m} alt="placeholder image" width={140} height={100} />
                    : <p>Geen afbeelding beschikbaar</p>
                }
                <div>
                    <h2>{item.species.scientificName}</h2>
                    <p>{score}% match.</p>
                </div>
            </div>
        </li>
    )
}

export default Result