"use client";


import Plants from '@/components/plants-container';
import SearchBar from '@/components/searchbar';
import Heading from '@/components/heading';
import Reset from '@/styles/app.scss';
import Colors from '@/styles/variables.scss';
import Styles from './page.module.scss';
import { motion } from 'framer-motion';

export default function Home() {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      >

    <section className={Styles.container}>
      <Heading />
      <SearchBar />
      <Plants />
    </section>
    </motion.div>
  )
}
