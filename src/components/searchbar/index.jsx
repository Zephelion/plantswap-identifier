import Styles from './styles.module.scss'
import RadioInput from '@/components/common/input/radio'

const SearchBar = ({ input = '', setInput, setIsAvailable }) => {
    return (
        <form className={Styles.search}>
            <section >
                <span>🔍</span>
                <input
                    aria-label="Zoek een plant"
                    type="search"
                    placeholder="Zoek een plant..."
                    value={input}
                    onChange={e => setInput(e.target.value.trimStart())}
                />
                {
                    input && <button onClick={e => setInput('')}>
                        ✖
                    </button>
                }
            </section>
            <fieldset>
                <RadioInput 
                    id="is-taken-null"
                    name="is-taken"
                    label="All"
                    value={true}
                    updateChange={() => setIsAvailable(null)}
                />
                <RadioInput 
                    id="is-taken-false"
                    name="is-taken"
                    label="Beschikbaar"
                    updateChange={() => setIsAvailable(true)}
                />
                <RadioInput
                    id="is-taken-true"
                    name="is-taken"
                    label="Niet beschikbaar"
                    updateChange={() => setIsAvailable(false)}
                />
            </fieldset>
        </form>
    )
}

export default SearchBar
