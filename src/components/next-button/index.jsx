import Styles from "./styles.module.scss";
import MotionContainer from "@/components/common/motion";

const NextButton = ({label = "Doorgaan", clickFunction}) => {
  return (
      <MotionContainer>
        <button className={Styles.next} onClick={clickFunction}>
            {label}
        </button>
    </MotionContainer>
  )
}

export default NextButton;