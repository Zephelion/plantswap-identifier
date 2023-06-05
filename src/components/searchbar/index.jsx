import Styles from '@/components/searchbar/searchbar.module.scss'

const SearchBar = () => {
  return (
    <input className={Styles.search} type="search" placeholder="Zoek een plant..." />
  )
}

export default SearchBar