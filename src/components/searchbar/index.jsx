'use client'
import Styles from './styles.module.scss'
import RadioInput from '@/components/common/input/radio'

const SearchBar = ({ input = '', setInput, setIsTaken }) => {
    return (
        <form className={Styles.search}>
            <section >
                <span>🔍</span>
                <input
                    type="search"
                    placeholder="Zoek een plant..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                {
                    input && <button onClick={e => setInput('')}>
                        ✖
                    </button>
                }
            </section>
            <fieldset>
                <RadioInput 
                    id="is-taken-false"
                    name="is-taken"
                    label="Beschikbaar"
                    value={false}
                    updateChange={() => setIsTaken(false)}
                />
                <RadioInput
                    id="is-taken-true"
                    name="is-taken"
                    label="Niet beschikbaar"
                    value={true}
                    updateChange={() => setIsTaken(true)}
                />
            </fieldset>
        </form>
    )
}

export default SearchBar
