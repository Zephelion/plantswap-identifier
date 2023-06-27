import Button from "@/components/common/button"
import Styles from './styles.module.scss'

export const ErrorMessage = ({ message, step, label, updateStep }) => {
    return (
        <section className={Styles.message}>
            <h1>{message}</h1>
            <Button clickAction={() => updateStep(step)} label={label} type="button" />
        </section>
    )
}