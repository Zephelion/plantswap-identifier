'use client'
import Styles from './styles.module.scss'

const SearchBar = ({ input = '', setInput }) => {
    return (
        <input
            className={Styles.search}
            type="search"
            placeholder="Zoek een plant..."
            value={input}
            onChange={e => setInput(e.target.value)}
        />
    )
}

export default SearchBar
