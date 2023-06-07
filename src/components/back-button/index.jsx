import Styles from './styles.module.scss'

const index = () => {
  return (
    <a href="/plants" className={Styles.back}>
        <img src="/icons/back.svg" alt="" />
    </a>
  )
}

export default index