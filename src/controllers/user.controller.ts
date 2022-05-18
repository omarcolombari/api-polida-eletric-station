import { Request, Response } from "express";
import { AppError, AppErrorHandler } from "../errors";

import authUserService from "../services/sessions/authUser.service";
import CreateUserService from "../services/users/createUser.service";

export default class UserController {
  static async store(req: Request, res: Response) {
    try {
      const { name, password, contact, isAdmin } = req.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        password,
        contact,
        isAdmin,
      });

      return res.status(201).json(user);
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }

  static async session(req: Request, res: Response) {
    try {
      const { name, password } = req.body;

      const auth = new authUserService();

      const token = await auth.execute({ name, password });

      return res.status(200).json(token);
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async index(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async show(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
}
