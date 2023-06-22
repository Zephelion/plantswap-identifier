import Styles from './styles.module.scss'

const PlantInfo = ({ info }) => {

    return (
        <>
            <h2 className={Styles.name}>
                {info.naam}
            </h2>
            <section className={Styles.information}>
                <h3>Beschrijving</h3>
                <p>{info.beschrijving}</p>
            </section>
            <section className={Styles.information}>
                <h3>Land van herkomst</h3>
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
        </>
    )
}

export default PlantInfo