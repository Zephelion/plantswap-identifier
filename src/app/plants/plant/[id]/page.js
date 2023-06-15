'use client';
import Styles from './page.module.scss'
import Information from '@/components/information'
import BackButton from '@/components/back-button'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'
import PlantDetailsLayout from '@/components/layouts/plant-details-layout'
import axios from 'axios';
import Link from 'next/link';


const fetchInfo = async (id) => {

    const data = await axios.get(`/api/plants/plant`, {
        params: {
            id
        }
    })
    return data.data
}

const Page = ({ params }) => {
    
    const id = params.id;
    const [info, setInfo] = useState([])
    console.log(id)
    
    useEffect(() => {
        (async () => {
            const { data } = await fetchInfo(id)
            setInfo(data)
        })()
    }, [id])

    return (
        <PlantDetailsLayout>
            <Suspense fallback={<Loading />}>
                <figure className={Styles.cover}>
                    <div className={Styles.cover_background}></div>
                    <img src="/images/cover.svg" alt="Aloe Vera" />
                </figure>
                <article className={Styles.information}>
                    <Information info={info} />
                </article>
                <Link className={Styles.test} href={`/plants/new?id=${id}`}>
                    <button>Plant ruilen</button>
                </Link>
            </Suspense>
            <BackButton />
        </PlantDetailsLayout>
    )
}

export default Page