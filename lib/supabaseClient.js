import { createClient } from '@supabase/supabase-js'

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(API_URL, API_KEY);