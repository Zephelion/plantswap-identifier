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
