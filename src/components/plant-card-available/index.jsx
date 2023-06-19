import styles from './styles.module.scss'

const PlantAvailable = ({name, image, id, chosenPlant}) => {

    const handleChosenPlant = () => {
        // console.log('clicked')
        chosenPlant({name, image:"/images/placeholder.png", id})
    }


  return (
    <li className={styles.card} onClick={() => handleChosenPlant()}>
      <img src="/images/placeholder.png" alt={name} />
      <div>
        <h2>{name}</h2>
        <h3>13 June ‘23</h3>
      </div>
  </li>
  )
}

export default PlantAvailable