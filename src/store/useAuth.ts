import { create } from "zustand";

import { supabaseClient } from "../providers/supabaseClient";

// interface IUseAuth {
//   session: [] | null;
//   user: [] | null;
// }

export const useAuth = create((set) => ({
  session: null,
  user: null,
  loading: false,
  signIn: async ({ email, password }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }

    set({ data, loading: false });
  },
  signUp: async ({ email, password }) => {
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
