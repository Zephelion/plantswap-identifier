import Styles from "./styles.module.scss";
import Link from "next/link";

const Plant = ({name, image, id}) => {

  return (
    <li className={Styles.card}>
      <Link href={`/plants/plant/${id}`}>
        <img src="/images/placeholder.png" alt={name} />
        <div>
          <h2>{name}</h2>
          <h3>13 June ‘23</h3>
        </div>
      </Link>
    </li>
  )
}

export default Plant