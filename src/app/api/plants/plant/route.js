import { NextResponse } from 'next/server';
import { hygraphMutation, hygraph } from '@/../lib/GrapQLClient';


export const runtime = 'nodejs';
const TABLE_NAME = 'cuttings';

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

    // console.log(stekjes[0]);

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
            slug: slugify(body.form_details.naam) || "",
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

    return NextResponse.json({
        data: createStekje,
    });
}
