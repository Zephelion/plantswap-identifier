import { NextResponse } from 'next/server';
import { hygraphMutation, hygraph } from '@/../lib/GrapQLClient';

export async function POST(req) {

    const body = await req.json();

    const { createSwap } = await hygraphMutation.request(
        `
        mutation CreateStekjeMutation(
            $collector: String!,
            $stekje_in: ID!,
            $stekje_out: ID!,
        ) {
            createSwap(
                data: {
                    collector: $collector,
                    stekje_in: {
                        connect: {
                            id: $stekje_in
                        }
                    }
                    stekje_out: {
                        connect: {
                            id: $stekje_out
                        }
                    }
                }
            ) 
            {
                id
                collector
                stekje_in {
                  naam
                }
                stekje_out{
                  naam
                }
            }
        }  
        `,
        {
            collector: body.collector,
            stekje_in: body.stekje_in,
            stekje_out: body.stekje_out,
        }
    );

    const { publishSwap } = await hygraphMutation.request(
        `
        mutation publishSwap($id: ID!) {
            publishSwap(
                where: { id: $id }, 
                to: PUBLISHED
            ) {
                id
            }
        }
        `,
        {
            id: createSwap.id,
        }
    );

    return NextResponse.json({
        data: publishSwap,
    });
}
