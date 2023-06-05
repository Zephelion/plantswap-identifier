import Plants from '@/components/plants-container'
import SearchBar from '@/components/searchbar'
import Heading from '@/components/heading'
import Styles from '@/styles/app.scss'
import Colors from '@/styles/variables.scss'

export default function Home() {
  return (
    <section>
      <Heading />
      <SearchBar />
      <Plants />
    </section>
  )
}
