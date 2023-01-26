export interface IUser {
  user?: {
    name: string;
    surname: string;
    username: string;
  }
}

export interface IContext extends IUser {
  isAuthenticate: boolean | null;
  token: string | null | undefined;
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void;
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
