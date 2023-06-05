import Plant from '../plant-card'
import Styles from './plants-container.module.scss'

const plants = [
    {
        id: 1,
        name: "Aloe Vera",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
    {
        id: 2,
        name: "Snake Plant",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
    {
        id: 4,
        name: "Fiddle Leaf Fig",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
    {
        id: 5,
        name: "Fiddle Leaf Fig",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
    {
        id: 6,
        name: "Fiddle Leaf Fig",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
    {
        id: 7,
        name: "Fiddle Leaf Fig",
        image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
    },
]


const Plants = () => { 
  return (
    <ul className={Styles.container}>
        {plants.map(plant => (
            <Plant key={plant.id} name={plant.name} image={plant.image} />
            // <p key={plant.id}>{plant.name}</p>
        ))}
    </ul>
  )
}

export default Plants