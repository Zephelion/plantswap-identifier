import { NextResponse } from 'next/server';
import FormData from 'form-data';
import axios from 'axios';
import { supabase } from '@/../lib/supabaseClient';

export const runtime = 'nodejs';
const TABLE_NAME = 'cuttings';

export async function GET(req) {

    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq('id', id)
        .single()
    ;

    if (error) {
        return NextResponse.error(error)
    }

    return NextResponse.json({ data });
}
