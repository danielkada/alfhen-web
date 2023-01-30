export interface IUser {
    name: string;
    surname: string;
    username: string;
}

export interface IContext {
  isAuthenticate: boolean | null;
  token: string | null | undefined;
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void;
  getUserLocalStorage: () => IUser;
}

export interface IAuthProvider {
  children: JSX.Element;
}

export interface ITokenDecode {
  exp: number;
}

export interface ILogout {
  logout: () => void;
}
