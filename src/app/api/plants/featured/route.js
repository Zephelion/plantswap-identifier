import { NextResponse } from 'next/server';
import hygraph from '@/../lib/ApolloClient';

export async function GET(req, res) {

    const { searchParams } = new URL(req.url)
    const limit = parseInt(searchParams.get('limit'));

    const { stekjes } = await hygraph.request(
        `
        query GetStekjesQuery($limit: Int) {
            stekjes(
                orderBy: createdAt_DESC
                first: $limit
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
                createdAt
              }
        }           
        `,
        {
            limit,
        }
    );

    if (!stekjes) {
        return NextResponse.error(new Error('No stekjes found'));
    }

    return NextResponse.json({
        data: stekjes
    });
}

