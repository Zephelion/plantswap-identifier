import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabaseClient';

const TABLE_NAME = 'swaps';

export async function POST(req) {

    const body = await req.json();

    const { error } = await supabase
        .from(TABLE_NAME)
        .insert({
            plant_in: body.plant_in,
            plant_out: body.plant_out,
        })
    ;

    if (error) {
        return NextResponse.error(error)
    }

    return NextResponse.json({ 
        message: 'Plants swapped successfully',
    });
}
