'use client'
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                >
                {children}
            </motion.main> 
            <Footer />
        </>
    )
}