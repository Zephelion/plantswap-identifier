import Styles from './styles.module.scss'

const SearchBar = () => {
  return (
    <input className={Styles.search} type="search" placeholder="Zoek een plant..." />
  )
}

export default SearchBar
