import { getSession } from "@/utils/auth";
import {useState, useEffect } from 'react';

export default function useSession() {
    const [session, setSession] = useState<{data: any, error: any}>({data: null, error: null});

    useEffect(() => {
        (async () => {
            setSession(await getSession());
        })();
    }, [])

    console.log(session)

    return session;
}