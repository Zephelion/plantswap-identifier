import Styles from "./styles.module.scss";

const Plant = ({name, image}) => {
  return (
    <li className={Styles.card}>
      <a href="/plants/plant">
        <img src={image} alt={name} width={100} height={100} />
        <h2>{name}</h2>
      </a>
    </li>
  )
}

export default Plant