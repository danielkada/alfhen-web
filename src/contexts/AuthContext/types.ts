import {} from '../../pages/SignUp/';

export interface IUser {
  name: string;
  surname: string;
  username: string;
}

export interface IUserCreate {
  name: string;
  surname: string;
  username: string;
  password: string;
  confirm_password: string;
}

export interface IContext {
  isAuthenticate: boolean | null;
  token: string | null | undefined;
  authenticate: (username: string, password: string) => Promise<void>
  logout: () => void;
  update: ({ name, surname, username }: IUser) => Promise<void>;
  create: ({ name, surname, username, password, confirm_password }: IUserCreate) => Promise<void>
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
