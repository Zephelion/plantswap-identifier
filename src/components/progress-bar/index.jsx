import Styles from './styles.module.scss'

export const ProgressBar = ({ activeStep, setActiveStep, count, steps }) => {
    return (
        <nav className={Styles.progress}>
            <ul>
                {steps.map((step, index) => {
                    const number = index + 1;
                    const active = number <= activeStep;
                    const current = number === activeStep;

                    return (
                        <li
                            key={index}
                        >
                            <button
                                className={`${Styles.step} ${active ? Styles.active : ''} ${current ? Styles.current : ''}`}
                                onClick={() => setActiveStep(number)}
                            >
                                {number}
                            </button>
                            <span>
                                {step.title}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}