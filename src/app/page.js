import styles from './page.module.scss'
import PlantCard from '@/components/plant-card';
import List from '@/components/common/ordered-list/container';
import ListItem from '@/components/common/ordered-list/item';
export default function Home() {

    const plants = [
        {
            name: 'Monstera',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
        {
            name: 'Sansevieria',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
        {
            name: 'Ficus Lyrata',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
        {
            name: 'Monstera',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
        {
            name: 'Sansevieria',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
        {
            name: 'Ficus Lyrata',
            image: 'https://www.ikea.com/nl/nl/images/products/fejka-kunstplant-binnen-buiten-monstera__0614197_pe686822_s5.jpg'
        },
    ]

    return (
        <section className={styles.intro}>
            <div>
                <h2>Planten</h2>
                <a href="#">Bekijk alle &gt;</a>
            </div>
            <ul>
                {plants.map((plant, index) => (
                    <PlantCard key={index} plant={plant} />
                ))}
            </ul>
            <h2>Hoe werkt het?</h2>
            <List>
                <ListItem>Lorem ipsum</ListItem>
                <ListItem>Lorem ipsum</ListItem>
                <ListItem>Lorem ipsum</ListItem>
            </List>
        </section>
    )
}
