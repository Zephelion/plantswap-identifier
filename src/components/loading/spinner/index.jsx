import Styles from './styles.module.scss'
import { BaseLoading } from '../base'

export const LoadingSpinner = () => {
    return (
        <BaseLoading>
            <span className={Styles.spinner}></span>
        </BaseLoading>
    )
}