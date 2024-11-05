import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wurcwblbzemnvlqsxvtt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cmN3YmxiemVtbnZscXN4dnR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NDQyNTQsImV4cCI6MjA0NDIyMDI1NH0.4tyMjQQDqYy5hG2xke5OM-g3EUvFGZHyEjgoqVks6qg';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;