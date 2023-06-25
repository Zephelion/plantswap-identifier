import Plants from '@/components/plants-container'
import Styles from './page.module.scss'
import MainLayout from '@/components/layouts/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <section className={Styles.container}>
        <Plants />
      </section>
    </MainLayout>
  )
}
