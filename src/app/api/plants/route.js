import { NextResponse } from 'next/server';
import FormData from 'form-data';
import axios from 'axios';
import { supabase } from '@/../lib/supabaseClient';

const API_KEY = process.env.NEXT_PUBLIC_PLANTNET_KEY;
const API_URL = `https://my-api.plantnet.org/v2/identify/all?include-related-images=true&no-reject=false&lang=en&api-key=${API_KEY}`;

export const runtime = 'nodejs';
const TABLE_NAME = 'cuttings';

// get image from post request without formidable next js
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
    form.append('images', buffer, file.name);

    const response = await axios.post(API_URL, form, {
        headers: form.getHeaders()
    });

    const data = response.data;
    return NextResponse.json({ data });
}

export async function GET(req, res) {
    const url = new URL(req.url);
    const search = url.searchParams.get('search');
    const isTaken = url.searchParams.get('is_taken');
    
    if(search || isTaken) {
        const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .ilike('name', `%${search}%`)
        .eq('is_taken', isTaken)
        .eq('is_active', true);
        
        if(error) {
            return NextResponse.error(error);
        }
        
        return NextResponse.json({ data });
    } else {
        const { data, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq('is_active', true);


        if(error) {
            return NextResponse.error(error);
        }
    
        return NextResponse.json({ data });
    }

}
