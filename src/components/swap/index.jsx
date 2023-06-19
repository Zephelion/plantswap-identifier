import Styles from './styles.module.scss'
import Button from '@/components/common/button'

const Swap = ({chosenPlant, name, image}) => {
  return (
    <section className={Styles.container}>
        <div className={Styles.inner}>
            <div className={Styles.plant}>
                <div className={Styles.image}>
                    <img src={image.src} alt={name} />
                </div>
                <span>{name.latin_name}</span>
            </div>

            <div className={Styles.icon}>
                <img src="/icons/swap.svg" alt="swap" />
            </div>


            <div className={Styles.chosen}>
                <div className={Styles.image}>
                    <img src={chosenPlant.image} alt="" />
                </div>
                <span>{chosenPlant.name}</span>
            </div>
        </div>
        { chosenPlant ? <Button buttonId="swap" label="Swap!" /> : null}
    </section>
  )
}

export default Swap