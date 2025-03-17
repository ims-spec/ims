import {useEffect, useState} from "react";
import {supabaseClient} from "./providers/supabaseClient.ts";
import {User, Session} from "@supabase/supabase-js";

// import {Layout} from "./pages/Layout";
// import { CustomRoutes } from "./providers/customRoutes";
// import { MainRoutes } from "./providers/MainRoutes.tsx";
import {SomeRoutes} from "./providers/SomeRoutes.tsx";
import {Auth} from "./auth/Auth";

//css
import 'bootstrap-icons/font/bootstrap-icons.css';



export const App = () => {
    const [user, setUser] = useState<User>();
    const [ session, setSession ] = useState<Session>();
    const [ role, setRole] = useState('');
    useEffect(() => {

        const getSession = async () => {
            const {data, error} = await supabaseClient.auth.getSession();
            if (error) {
                throw error;
            }
            setSession(data.session);
            setUser(data.session.user);
            setRole(data.session?.user.app_metadata.role);
            console.log(data);
            console.log(data.session?.user.app_metadata.role);
        }
        getSession().then();

        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user);
        });

        return () => subscription.unsubscribe();
    }, []);


    // return user ? <CustomRoutes userRole={'admin'}/> : <Auth />;
    return user ? <SomeRoutes userRole={role}/> : <Auth/>;
    // return user ? <MainRoutes userRole={'user'}/> : <Auth />;


};
