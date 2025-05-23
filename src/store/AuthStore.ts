import { create } from "zustand";
import axios from "axios";

// interface signup {
//   email: string;
//   password: string;
//   name: string;
// }
//TODO : Use this
axios.defaults.withCredentials = true;
interface AuthStore {
  user?: null;
  isAuthenticated: boolean;
  error: null;
  isLoading: boolean;
  isCheckingAuth: boolean; // Checking if user is logger in or not
  signUp: (email: string, name: string, password: string) => Promise<void>;
  verifyEmail: (verificationCode: string) => Promise<void>;
}
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  signUp: async (email, password, name) => {
    set({ isLoading: true, error: null });
    // set((state) => ({ ...state, isAuthenticated: false })); //This is correwct
    // set((state) => (state.isAuthenticated = false)); // this is incorrect as it mutates the filed direclty return obj instead
    try {
      const response = await axios.post("http://localhost:8000/signin", {
        email,
        password,
        name,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      }); //User might be incorrectg
    } catch (error: any) {
      set({
        error: error?.response.message.data || "Error while Signing up",
        isLoading: false,
      });
    }
  },
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post("http://localhost:8000/verify-email", {
        code,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error?.response.message.data || "Error while Signing up",
        isLoading: false,
      });
    }
  },
}));
