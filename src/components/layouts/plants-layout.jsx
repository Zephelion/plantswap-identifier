"use client";

import MotionContainer from "@/components/common/motion";
import Footer from "@/components/footer";
import { SkipToNav } from "../skip-to-nav";

export default function PlantDetailsLayout({ children }) {
    return (
        <>
            <MotionContainer tag='main'>
                <SkipToNav />
                <h1>Planten</h1>
                {children}
                <Footer />
            </MotionContainer>
        </>
    )
}