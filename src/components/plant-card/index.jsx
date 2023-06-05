import Styles from '@/components/plant-card/plant-card.module.scss'

const Plant = ({name, image}) => {
  return (
    <li className={Styles.plant}>
      <a href="#">
        <img src={image} alt="" />
      </a>
    </li>
  )
}

export default Plant