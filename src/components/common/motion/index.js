"use client"
import { motion } from "framer-motion";

export default function MotionContainer({ 
    children, 
    initial = { opacity: 0 }, 
    animate = { opacity: 1 },
    exit = { opacity: 0 },
    transition = { duration: 0.5 },
    tag = "div"
}) {

    const MotionTag = motion(tag);

    return (
        <MotionTag
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
        >
            {children}
        </MotionTag>
    );
}