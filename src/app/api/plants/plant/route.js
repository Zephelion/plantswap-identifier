import { NextResponse } from 'next/server';
import { hygraphMutation, hygraph } from '@/../lib/GrapQLClient';

export const runtime = 'nodejs';

export async function GET(req) {

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const { stekjes } = await hygraph.request(
        `
        query GetStekjesQuery($id: ID) {
            stekjes(
                first: 1
                where: {
                    id: $id,
                }
            ) {
                id
                naam
                slug
                beschrijving
                landvanherkomst
                voeding
                verpotten
                giftig
                temperatuur
                watergeven
                zonlicht
                categories {
                    id
                    naam
                }
                publishedBy {
                    id
                    name
                }
                fotos {
                    fileName
                    height
                    width
                    url
                }
                beschikbaar
                createdAt
            }
        }                   
        `,
        {
            id,
        }
    );

    if (!stekjes[0]) {
        return NextResponse.error(new Error("No stekje found"));
    }

    return NextResponse.json({
        data: stekjes[0],
    });
}

export async function POST(req) {

    const body = await req.json()

    function slugify(str) {
        str = str.replace(/^\s+|\s+$/g, ''); 
        str = str.toLowerCase(); 
        str = str.replace(/[^a-z0-9 -]/g, '')
                 .replace(/\s+/g, '-')
                 .replace(/-+/g, '-');
        return str;
    }


    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const dateString = `${year}${month}${day}-${hour}${minute}${second}`; 

    // INsert into hygraph mutation
    const { createStekje } = await hygraphMutation.request(
        `
        mutation CreateStekjeMutation(
            $naam: String!,
            $beschrijving: String!,
            $landvanherkomst: String!,
            $voeding: String!,
            $verpotten: String!,
            $giftig: String!,
            $slug: String!,
            $temperatuur: String!,
            $zonlicht: String!,
            $watergeven: String!,
            $beschikbaar: Boolean!,
            $actief: Boolean!,
        ) {
            createStekje(
                data: {
                    naam: $naam,
                    beschrijving: $beschrijving,
                    landvanherkomst: $landvanherkomst,
                    voeding: $voeding,
                    verpotten: $verpotten,
                    giftig: $giftig,
                    slug: $slug,
                    temperatuur: $temperatuur,
                    zonlicht: $zonlicht,
                    watergeven: $watergeven,
                    beschikbaar: $beschikbaar,
                    actief: $actief,
                }
            ) 
            {
                id
            }
        }          
        `,
        {
            naam: body.form_details.naam || "",
            slug: slugify(body.form_details.naam) + "-" + dateString,
            latijnsenaam: body.form_details.latijnsenaam || "",
            beschrijving: body.form_details.beschrijving || "",
            landvanherkomst: body.form_details.landvanherkomst || "",
            voeding: body.form_tips.voeding || "",
            verpotten: body.form_tips.verpotten || "",
            giftig: body.form_tips.giftig || "",
            temperatuur: body.form_tips.temperatuur || "",
            zonlicht: body.form_tips.zonlicht || "",
            watergeven: body.form_tips.watergeven || "",
            beschikbaar: true,
            actief: true,
        }
    );

    await hygraphMutation.request(
        `
        mutation publishStekje($id: ID!) {
            publishStekje(
                where: { id: $id }, 
                to: PUBLISHED
            ) {
                id
            }
        }
        `,
        {
            id: createStekje.id,
        }
    );

    return NextResponse.json({
        data: createStekje,
    });
}
