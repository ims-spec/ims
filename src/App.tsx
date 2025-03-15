import {useState, useEffect} from "react";
import {supabaseClient} from "./providers/supabaseClient.ts";
import {User} from "@supabase/supabase-js";

// import {Layout} from "./pages/Layout";
import { CustomRoutes } from "./providers/customRoutes";
import {Auth} from "./auth/Auth";



export const App = () => {

    const [user, setUser] = useState<User>();


    useEffect(() => {
        const getSession = async () => {
            const {data, error} = await supabaseClient.auth.getSession();
            if (error) {
                throw error;
            }
            setUser(data.session?.user)
                        console.log(data.session);

        }
        getSession().then();

        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();

    }, []);

    return user ? <CustomRoutes userRole={'admin'}/> : <Auth />;




};
