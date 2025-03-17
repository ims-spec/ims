//useAuth

export type SignInAuth = (credential: {email: string, password:string}) => Promise<void>