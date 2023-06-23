import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabaseClient';
import hygraph from '@/../lib/ApolloClient';

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

    const { data, error } = await supabase
        .from(TABLE_NAME)
        .insert({
            name: body.form_details.name || "",
            latin_name: body.form_details.latin_name || "",
            origin: body.form_details.origin || "",
            poisonous: body.form_details.poisonous || "",
            description: body.form_details.description || "",
            temperature: body.form_tips.temperature || "",
            sunlight: body.form_tips.sunlight || "",
            hydration_guide: body.form_tips.hydration_guide || "",
        })
        .select('id')
        .single()
    ;

    if (error) {
        console.log(error)
        return NextResponse.error(error)
    }

    return NextResponse.json({ 
        data
    });
}
