import supabase from "../client";

export default async function signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
}
