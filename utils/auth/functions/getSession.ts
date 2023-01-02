import supabase from "../client";

export default function getSession() {
    const getData = async () => {
        const { data, error } = await supabase.auth.getSession();
        return {data, error}
    }
    
    return getData()
}