import {create} from "zustand";


import {supabaseClient} from "../providers/supabaseClient.ts";

 interface IAuth{
    email: string,
    password: string,
}

export const useAuth = create((set) => ({
    session: null,
    user: null,
    loading: false,
    signInAuth: async ({email, password}: IAuth): Promise<void> => {
        const {data, error} = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            throw error;
        }
        set({data, loading: false});
        // return data
    },
    signUpAuth: async ({email, password}: IAuth): Promise<void> => {
        const {data, error} = await supabaseClient.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            throw error;
        }

        set({data, loading: false});
    },
    getSession: async ()=> {
        const {data, error} = await supabaseClient.auth.getSession();
        if (error) {
            throw error;
        }
        set({session: data.session});
        set({user:data.session.user});
    },
}));
