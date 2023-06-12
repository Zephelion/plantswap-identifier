// 'use client'
import BaseLayout from '@/components/layouts/base-layout';
import '@/styles/app.scss';
// import { motion } from 'framer-motion';

export default function RootLayout({ children }) {
    
    return (
        <BaseLayout>
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0 }}
                > */}
                {children}
            {/* </motion.div>  */}
        </BaseLayout>
    )
}
