import Styles from './styles.module.scss'



const Result = ({id, name, image, score, active, setActive}) => {

  const handleActive = (e) => {
    e.preventDefault();
    setActive(id)
  } 

  const styles = Styles.result + (active ? Styles.active : "");
  return (
    <li className={styles} onClick={(e) => handleActive(e)}>
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