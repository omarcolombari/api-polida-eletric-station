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
  name: string;
  isAdmin: boolean;
}
