import {useState, useEffect} from "react";
import {supabaseClient} from "./providers/supabaseClient.ts";
import {User} from "@supabase/supabase-js";

// import {Layout} from "./pages/Layout";
// import { CustomRoutes } from "./providers/customRoutes";
// import { MainRoutes } from "./providers/MainRoutes.tsx";
import { SomeRoutes } from "./providers/SomeRoutes.tsx";
import {Auth} from "./auth/Auth";

//css
import 'bootstrap-icons/font/bootstrap-icons.css';







export const App = () => {

    const [user, setUser] = useState<User>();
    const [token, setToken] = useState('')

    useEffect(() => {
        const getSession = async () => {
            const {data, error} = await supabaseClient.auth.getSession();
            if (error) {
                throw error;
            }
            const session = data.session
            
            if (session) {
                return (
                    setUser(session?.user),
                    setToken(session.access_token ?? "")
                )                
            }
            console.log('Token: ' + token)
                
            // setUser(data.session?.user)
                        // console.log(data.session);
        }
        getSession().then();
        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user);
        });
        return () => subscription.unsubscribe();
    }, [token]);

    // return user ? <CustomRoutes userRole={'admin'}/> : <Auth />;
    return user ? <SomeRoutes userRole={'user'}/> : <Auth />;
    // return user ? <MainRoutes userRole={'user'}/> : <Auth />;




};
