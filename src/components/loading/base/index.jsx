import Styles from './styles.module.scss'

export const BaseLoading = ({ children }) => {
    return (
        <section className={Styles.loading}>
            {children}
        </section>
    )
}