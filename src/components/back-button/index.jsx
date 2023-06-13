import Styles from './styles.module.scss'
import Link from "next/link";


const index = () => {
  return (
    <Link href="/plants" className={Styles.back}>
      <img src="/icons/back.svg" alt="" />
    </Link>
  )
}

export default index