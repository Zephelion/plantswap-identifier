import Styles from "./styles.module.scss";
import Link from "next/link";

const Plant = ({name, image, id}) => {
  return (
    <li className={Styles.card}>
      <Link href={`/plants/plant/${id}`}>
        <img src={image} alt={name} width={100} height={100} />
        <h2>{name}</h2>
      </Link>
    </li>
  )
}

export default Plant