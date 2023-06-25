import Styles from './styles.module.scss'
import Link from 'next/link'

const LandingLink = () => {
  return (
    <Link href="/plants/new" className={Styles.action}>
        <span>
            Direct beginnen
        </span>
    </Link>
  )
}

export default LandingLink