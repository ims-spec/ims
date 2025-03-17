//useAuth

export type SignInAuth = (credential: { email: string, password: string }) => Promise<void>

//routes


//protected routes
export interface IProtectedProps {
  role?: string;
  redirectPath?: string;
  children?: React.ReactNode;
}