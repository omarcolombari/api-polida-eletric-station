export interface IUser {
  id: string;
  name: string;
  password: string;
  contact: string;
  isAdmin: boolean;
}

export interface IUserCreate {
  name: string;
  password: string;
  contact: string;
  isAdmin: boolean;
}

export interface IUserAuth {
  name: string;
  password: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserId {
  user_id: string;
}
