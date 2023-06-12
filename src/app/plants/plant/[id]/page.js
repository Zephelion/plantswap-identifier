'use client';
import Styles from './page.module.scss'
import Information from '@/components/information'
import BackButton from '@/components/back-button'
import { Suspense, useEffect, useState } from 'react'
import Loading from './loading'
import PlantDetailsLayout from '@/components/layouts/plant-details-layout'
import axios from 'axios';


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
                    <img src="/images/cover.svg" alt="Aloe Vera" />
                </figure>
                <article className={Styles.information}>
                    <Information info={info} />
                </article>
            </Suspense>
            <BackButton />
        </PlantDetailsLayout>
    )
}

export default Page