export interface IUser {
  id: string;
  cpf: string;
  name: string;
  password: string;
  contact: string;
  isAdmin: boolean;
}

export interface IUserCreate {
  cpf: string;
  name: string;
  password: string;
  contact: string;
  isAdmin: boolean;
}

export interface IUserAuth {
  cpf: string;
  password: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserId {
  id: string;
}

export interface IUserIds {
  user_id: string;
  id: string;
  isAdmin: boolean;
}

export interface IUserUpdate {
  id: string;
  password: string;
  contact: string;
}

export interface IUserReq {
  id: string;
  cpf: string;
  isAdmin: boolean;
}
