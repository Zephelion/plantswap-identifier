'use client'
import Footer from '@/components/footer';
import MotionContainer from '@/components/common/motion';

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <MotionContainer tag='main'>
                {children}
            </MotionContainer>
            {/* <Footer /> */}
        </>
    )
}