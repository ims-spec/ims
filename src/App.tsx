import { useState, useEffect } from "react";
import { Auth } from "./auth/Auth";
import { supabaseClient } from "./providers/supabaseClient";
import { Layout } from "./pages/Layout";
import { CustomRoutes } from "./providers/customRoutes";

export const App = () => {
  // const [session, setSession] = useState();
  const [ user, setUser ] = useState();

  // useEffect(() => {
  //   supabaseClient.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });
  //   const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  //
  //   return () => subscription.unsubscribe();
  // }, []);

  useEffect(() => {
    const getSession = async ()=>{
      const {data, error} = await supabaseClient.auth.getSession();
      if (error){
        throw error;
      }
      setUser(data.session?.user)
      console.log(data.session);
    }
    getSession();

    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
          setUser(session);
        });

        return () => subscription.unsubscribe();

  }, []);

  return user ? <CustomRoutes /> : <Auth />;
};
