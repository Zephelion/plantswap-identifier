'use client';

import Plants from '@/components/plants-container'
import Styles from './page.module.scss'
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
