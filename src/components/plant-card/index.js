import Image from "next/image";
import styles from "./styles.module.scss";

export default function PlantCard({ plant }) {
  return (
    <li className={styles.card}>
      <img src={plant.image} alt={plant.name} width={100} height={100} />
      <h2>{plant.name}</h2>
    </li>
  );
}
