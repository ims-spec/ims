import {useState, useEffect} from "react";

import {supabaseClient} from "./providers/supabaseClient.ts";
import {User} from "@supabase/supabase-js";

import {SomeRoutes} from "./providers/SomeRoutes.tsx";
import {Auth} from "./auth/Auth";
import {useAuth} from "./store/useAuth.ts";

//css
// import "bootstrap-icons/font/bootstrap-icons.css";

export const App = () => {
    const [user, setUser] = useState<User | null>(null);
    // const [role, setRole] = useState<string>('')
    const {getSession, role} = useAuth();

    useEffect(() => {
        getSession().then();
        const {
            data: {subscription},
        } = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
        });
        return () => subscription.unsubscribe();
    }, [getSession]);

    return user ? <SomeRoutes userRole={role ?? ""}/> : <Auth/>;

};
