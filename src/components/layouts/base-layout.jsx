import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function BaseLayout({ children }) {
    return (
        <html lang="nl">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}