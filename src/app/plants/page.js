import Plants from '@/components/plants-container'
import Styles from './page.module.scss'
import MainLayout from '@/components/layouts/main-layout';
import PlantLayout from '@/components/layouts/plants-layout';

export default function Home() {
  return (
    <PlantLayout>
      <section className={Styles.container}>
        <Plants />
      </section>
    </PlantLayout>
  )
}
