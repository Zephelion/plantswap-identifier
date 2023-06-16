import Image from 'next/image';
import Styles from './styles.module.scss'
import { useState } from 'react'



const Result = ({item, active, setActive}) => {

  const handleActive = () => {
    setActive(item);
  }

  const score = Math.round(item.score * 100);

  const styles = `${Styles.result} ${active ? Styles.active : ""}`;
  return (
    <li className={styles} onClick={() => handleActive()}>
      <p>{item.species.scientificName}</p>
      <div className={Styles.information} >
          <Image src={item.images[0].url.m} alt="placeholder image" width={140} height={100} />
          <div>
              <p>{score}% match.</p>
          </div>
      </div>
    </li>
  )
}

export default Result