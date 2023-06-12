'use client';

import Plants from '@/components/plants-container'
import SearchBar from '@/components/searchbar'
import Styles from './page.module.scss'
import MainLayout from '@/components/layouts/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <section className={Styles.container}>
        <SearchBar />
        <Plants />
      </section>
    </MainLayout>
  )
}
