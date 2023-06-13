import Styles from './styles.module.scss'

const PlantInfo = ({ info }) => {

    return (
        <>
            <h2 className={Styles.name}>
                {info.name}
            </h2>
            <section className={Styles.information}>
                <h3>Beschrijving</h3>
                <p>{info.description}</p>
            </section>
            <section className={Styles.information}>
                <h3>Land van herkomst</h3>
                <p>{info.origin}</p>
            </section>
            <section className={Styles.information}>
                <h3>Giftigheid</h3>
                <p>{info.poisonous}</p>
            </section>
            <section className={Styles.information}>
                <h3>Water geven</h3>
                <p>{info.hydration_guide}</p>
            </section>
        </>
    )
}

export default PlantInfo