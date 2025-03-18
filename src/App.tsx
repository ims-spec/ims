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
    const [role, setRole] = useState<string>('')

    useEffect(() => {
        const getSession = async () => {
            const {data, error} = await supabaseClient.auth.getSession();
            if (error) {
                throw error;
            }
            const session = data.session
            console.log(session?.user.app_metadata.role);
            
            if (session) {
                return (
                    setRole(session?.user.app_metadata.role),
                    setUser(session?.user)                    
                )
            }            
        }
        getSession().then();
        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user);
        });
        return () => subscription.unsubscribe();
    }, []);   



    // return user ? <CustomRoutes userRole={'admin'}/> : <Auth />;
    return user ? <SomeRoutes userRole={role}/> : <Auth />;
    // return user ? <MainRoutes userRole={'user'}/> : <Auth />;

};
