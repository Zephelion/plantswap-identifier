import Styles from './styles.module.scss'

export const ProgressBar = ({ activeStep, setActiveStep, count }) => {
    return (
        <section className={Styles.progress}>
            {Array(count).fill(0).map((_, index) => {
                const number = index + 1;
                const active = number <= activeStep;
                const current = number === activeStep;
                
                return (    
                    <button
                        key={index}
                        className={`${Styles.step} ${active ? Styles.active : ''} ${current ? Styles.current : ''}`}
                        onClick={() => setActiveStep(number)}
                    >
                        {number}
                    </button>
                )
            })}
        </section>
    )
}