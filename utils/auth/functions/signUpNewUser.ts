import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://jocskkvzpcuokfppevmo.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvY3Nra3Z6cGN1b2tmcHBldm1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI0Mjg2MDksImV4cCI6MTk4ODAwNDYwOX0.elPKkYkhyVLkEYwb3SJIQ6-FoE9zH-MLq8GkEJheW1M')

export default async function signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
}
