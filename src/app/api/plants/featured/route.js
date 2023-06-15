import { NextResponse } from 'next/server';
import { supabase } from '@/../lib/supabaseClient';

const TABLE_NAME = 'cuttings';

export async function GET(req) {

    const { searchParams } = new URL(req.url)
    const limit = searchParams.get('limit')

    const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .order('id', { ascending: false })
        .limit(limit)
    ;

    if (error) {
        return NextResponse.error(error)
    }

    return NextResponse.json({ data });
}
