"use client"

import MainLayout from "@/components/layouts/main-layout";
import MotionContainer from "@/components/common/motion";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push(`/plants`)
        }, 5000)

        return () => clearTimeout(timeout);

    }, [router]);


    return (
    <MainLayout>
        <section className={styles.succes}>
            <img src="/animations/succes.gif" alt="Succesvol toegevoegd" />
            <h1>Plant succesvol toegevoegd!</h1>
            <p>U word over een paar seconden teruggebracht</p>
        </section>
    </MainLayout>
    )
}

export default Page