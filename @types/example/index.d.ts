import * as express from "express";
import { IUserReq } from "../../src/interfaces/users";

declare global {
  namespace Express {
    export interface Request {
      user: IUserReq;
    }
  }
}
