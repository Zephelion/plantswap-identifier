import BaseLayout from '@/components/layouts/base-layout';
import '@/styles/app.scss';

export default function RootLayout({ children }) {
    
    return (
        <BaseLayout>
            {children}
        </BaseLayout>
    )
}
