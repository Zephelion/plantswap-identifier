import Styles from './page.module.scss'
import Information from '@/components/information'
import BackButton from '@/components/back-button'
import { Suspense } from 'react'
import Loading from './loading'
import PlantDetailsLayout from '@/components/layouts/plant-details-layout'


const page = () => {
  return (
    <PlantDetailsLayout>
      <Suspense fallback={<Loading/>}>
        <figure className={Styles.cover}>
          <img src="/images/cover.svg" alt="Aloe Vera" />
        </figure>
        <section className={Styles.information}>
          <Information />
        </section>
      </Suspense>
      <BackButton />
    </PlantDetailsLayout>
  )
}

export default page