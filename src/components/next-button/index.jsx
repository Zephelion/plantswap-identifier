import Styles from "./styles.module.scss";

const NextButton = ({label = "Doorgaan", clickFunction}) => {
  return (
    <button className={Styles.next} onClick={() => clickFunction(3)}>{label}</button>
  )
}

export default NextButton;