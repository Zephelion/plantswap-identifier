"use client";

import MotionContainer from "@/components/common/motion";
import Footer from "@/components/footer";

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <MotionContainer tag='main'>
                <h1>Planten</h1>
                {children}
                <Footer />
            </MotionContainer>
        </>
    )
}