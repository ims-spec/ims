import { useState, useEffect } from "react";
import { Auth } from "./auth/Auth";
import { supabaseClient } from "./providers/supabaseClient";
import { Layout } from "./pages/Layout";

export const App = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    console.log(session);
  });

  return session ? <Layout /> : <Auth />;
};
