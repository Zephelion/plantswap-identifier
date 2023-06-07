import Plants from '@/components/plants-container'
import SearchBar from '@/components/searchbar'
import Heading from '@/components/heading'
import Reset from '@/styles/app.scss'
import Colors from '@/styles/variables.scss'
import Styles from './page.module.scss'

export default function Home() {
  return (
    <section className={Styles.container}>
      <Heading />
      <SearchBar />
      <Plants />
    </section>
  )
}
