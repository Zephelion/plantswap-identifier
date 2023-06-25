import Image from 'next/image';
import Styles from './styles.module.scss'
import Link from "next/link";


const index = () => {
  return (
    <Link href="/plants" className={Styles.back}>
      <Image src="/icons/back.svg" alt="Go back icon" width={40} height={40} />
    </Link>
  )
}

export default index