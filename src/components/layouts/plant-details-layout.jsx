import Footer from '@/components/footer';

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}