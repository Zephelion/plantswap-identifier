import Styles from './styles.module.scss'
import Image from "next/image";

const PlantInfo = ({ info }) => {
    const date = new Date(info.createdAt)
    const createdAt = date.toLocaleDateString('nl-NL', {day: 'numeric', month: 'long', year: 'numeric'})

    const randomInt = Math.floor(Math.random() * 2)
    const moeilijkheidsgraad = ['Makkelijk', 'Uitdagend']
    const moeilijkheidsgraadText = moeilijkheidsgraad[randomInt];
    
    return (
        <>
            <section className={Styles.heading}>
                <h2>{info.naam}</h2>
                <p>{createdAt}</p>
            </section>

            <section className={Styles.information}>
                <p>{info.beschrijving}</p>
            </section>

            <section className={Styles.information}>
                <h3>Moeilijkheid</h3>
                <p>{moeilijkheidsgraadText}</p>
                {/* <p>{info.categories[0].naam}</p> */}
            </section>

            <section className={Styles.information}>
                <h3>Herkomst</h3>
                <p>{info.landvanherkomst}</p>
            </section>

            <section className={Styles.information}>
                <h3>Giftigheid</h3>
                <p>{info.giftig}</p>
            </section>

            <section className={Styles.information}>
                <h3>Water geven</h3>
                <p>{info.watergeven}</p>
            </section>

            <section className={Styles.information}>
                <h3>Temperatuur</h3>
                <p>{info.temperatuur}</p>
            </section>

            <section className={Styles.information}>
                <h3>Verpotten</h3>
                <p>{info.verpotten}</p>
            </section>

            <section className={Styles.information}>
                <h3>Voeding</h3>
                <p>{info.voeding}</p>
            </section>

            <section className={Styles.information}>
                <h3>Zonlicht</h3>
                <p>{info.zonlicht}</p>
            </section>
        </>
    )
}

export default PlantInfo