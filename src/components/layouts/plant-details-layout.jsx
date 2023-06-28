import Footer from '@/components/footer';
import MotionContainer from '@/components/common/motion';
import { SkipToNav } from '../skip-to-nav';

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <MotionContainer tag='main'>
                <SkipToNav />
                {children}
            </MotionContainer>
            {/* <Footer /> */}
        </>
    )
}