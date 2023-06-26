import BaseLayout from '@/components/layouts/base-layout';
import '@/styles/app.scss';

export const metadata = {
    title: "Plantswap",
    description: "Doneer en ruil planten met je buren",
    manifest: "/manifest.json",
}

export default function RootLayout({ children }) {
    
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    )
}
