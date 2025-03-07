import { create } from "zustand";

import { supabaseClient } from "../providers/supabaseClient";

export const useAuth = create((set) => ({
  session: null,
  user: null,
  loading: false,
  signInAuth: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }
    set({ data, loading: false });
    return data
  },
  signUpAuth: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }

    set({ data, loading: false });
  },
}));
