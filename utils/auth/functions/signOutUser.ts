import supabase from "../client";

export default async function signOutUser() {
return await supabase.auth.signOut()
}