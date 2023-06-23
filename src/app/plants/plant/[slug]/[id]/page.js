'use client';

import Styles from './page.module.scss'
import Information from '@/components/information'
import BackButton from '@/components/back-button'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'
import PlantDetailsLayout from '@/components/layouts/plant-details-layout'
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';


const fetchInfo = async (id, slug) => {

    const data = await axios.get(`/api/plants/plant`, {
        params: {
            id,
            slug
        }
    })
    return data.data
}

const Page = ({ params }) => {

    const { id, slug } = params;
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const { data } = await fetchInfo(id, slug)
            setInfo(data)
            setLoading(false)
        })()
    }, [id, slug])

    return (
        <PlantDetailsLayout>
            <Suspense fallback={<Loading />}>
                <figure className={Styles.cover}>
                    <div className={Styles.cover_background}></div>
                    {

                        !loading && <Image src={info.fotos[0].url} alt={`Afbeelding voor ${info.naam}`} fill={true} placeholder="/images/cover.svg"/>
                    }
                </figure>
                <article className={Styles.information}>
                    {
                        loading ? <Loading /> : <Information info={info} />
                    }
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