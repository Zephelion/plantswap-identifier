import Styles from './styles.module.scss'

const index = () => {
  return (
    <>
        <h2 className={Styles.name}>Calathea Musaica</h2>
        <section className={Styles.information}>
            <h3>Beschrijving</h3>
            <p>Deze ‘mozaïek plant’, ook wel ‘Calathea Network’ genoemd, werd ontdekt in 1875. In tegenstelling tot haar kleurrijke Calathea broers en zussen, heeft elk blad een unieke lichtgroene tekening.</p>
        </section>
        <section className={Styles.information}>
            <h3>Land van herkomst</h3>
            <p>Brazilië</p>
        </section>
        <section className={Styles.information}>
            <h3>Giftigheid</h3>
            <p>Niet giftig voor huisdieren, maar kan wel maag-irritatie veroorzaken.</p>
        </section>
        <section className={Styles.information}>
            <h3>Water geven</h3>
            <p>Elke week een flinke scheut water als de aarde lichtjes opgedroogd is. Zorg ervoor dat het water onderin de pot kan wegstromen.</p>
        </section>
    </>
  )
}

export default index