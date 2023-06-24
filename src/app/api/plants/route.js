import { NextResponse } from "next/server";
import FormData from "form-data";
import axios from "axios";
import hygraph from "@/../lib/ApolloClient";

export const runtime = "nodejs";

const PLANTNET_API_KEY = process.env.NEXT_PUBLIC_PLANTNET_KEY;
const PLANTNET_API_URL = `https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=false&lang=en&api-key=${PLANTNET_API_KEY}`;

export async function POST(req, res) {
    const reqFormData = await req.formData();
    const file = reqFormData.get("image");

    const stream = file.stream();

    const chunks = [];
    for await (const chunk of stream) {
        chunks.push(chunk);
    }

    const buffer = Buffer.concat(chunks);

    const form = new FormData();
    form.append("images", buffer, file.name);

    try {
        const response = await axios.post(PLANTNET_API_URL, form, {
            headers: form.getHeaders(),
        });

        const data = response.data;

        return NextResponse.json({ data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 })
    }
}

export async function GET(req, res) {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    let available = searchParams.get("available") 
    
    switch (available) {
        case "true":
            available = !true;
            break;
        case "false":
            available = !false;
            break;
        default:
            available = null;
    }

    // ! Add pagination
    const { stekjes } = await hygraph.request(
        `
        query GetStekjesQuery($search: String, $available: Boolean) {
            stekjes(
                orderBy: createdAt_DESC
                first: 100
                where: {
                    naam_contains: $search, 
                    beschikbaar_not: $available,
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
            search,
            available,
        }
    );

    // console.log(stekjes[0]);
    console.log("aantal stekjes", stekjes.length);

    if (!stekjes) {
        return NextResponse.error(new Error("No stekjes found"));
    }

    return NextResponse.json({
        data: stekjes,
    });
}
