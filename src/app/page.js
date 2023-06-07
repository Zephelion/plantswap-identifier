import styles from './page.module.scss'
import PlantCard from '@/components/plant-card';
import List from '@/components/common/ordered-list/container';
import ListItem from '@/components/common/ordered-list/item';
import Heading from '@/components/heading';
export default function Home() {

    const plants = [
        {
            id: 1,
            name: "Aloe Vera",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
        {
            id: 2,
            name: "Snake Plant",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
        {
            id: 4,
            name: "Fiddle Leaf Fig",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
        {
            id: 5,
            name: "Fiddle Leaf Fig",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
        {
            id: 6,
            name: "Fiddle Leaf Fig",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
        {
            id: 7,
            name: "Fiddle Leaf Fig",
            image: "https://www.youwish.nl/wp-content/uploads/2021/05/whitelilyaloe.jpg",
        },
    ]

    return (
        <section className={styles.intro}>
            <Heading />
            <div>
                <h2>Planten</h2>
                <a href="#">Bekijk alle &gt;</a>
            </div>
            <ul>
                {plants.map((plant, index) => (
                    <PlantCard key={index} plant={plant} image={plant.image} name={plant.name} />
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
