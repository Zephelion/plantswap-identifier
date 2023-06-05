// import Styles from '@/components/plant-card/plant-card.module.scss'
import Styles from "./styles.module.scss";

const Plant = ({name, image}) => {
  return (
    <li className={Styles.card}>
        <img src={image} alt={name} width={100} height={100} />
        <h2>{name}</h2>
    </li>
  )
}

export default Plant