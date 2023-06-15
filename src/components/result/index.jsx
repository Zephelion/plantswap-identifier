import Styles from './styles.module.scss'
import { useState } from 'react'



const Result = ({id, name, image, score, active, setActive}) => {

  const handleActive = () => {
    setActive(id);
    // setHasAnotherClass(true);
  }

  const styles = `${Styles.result} ${active ? Styles.active : ""}`;
  return (
    <li className={styles} onClick={() => handleActive()}>
      <p>{name}</p>
      <div className={Styles.information} >
          <img src={image} alt="placeholder image" width={140} height={100} />
          <div>
              <p>{score}% match.</p>
          </div>
      </div>
    </li>
  )
}

export default Result