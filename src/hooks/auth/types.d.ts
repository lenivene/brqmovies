interface ICredentials {
  username: string;
  password: string;
}

interface IAccountData {
  username: string;
}

interface AuthContextProps {
  user: IAccountData | null;
  isAuthenticated: boolean;
  signIn(credentials: ICredentials): Promise<void>;
  signOut(): Promise<void>;
}
