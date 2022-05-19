import { Request, Response } from "express";
import { AppError, AppErrorHandler } from "../errors";

import authUserService from "../services/sessions/authUser.service";
import CreateUserService from "../services/users/createUser.service";
import DeleteUserService from "../services/users/deleteUser.service";
import ListUsersService from "../services/users/listUsers.service";
import ShowUserService from "../services/users/showUser.service";
import UpdateUserService from "../services/users/updateUser.service";

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
      const listUsers = new ListUsersService();

      const users = await listUsers.execute();

      return res.status(200).json(users);
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async show(req: Request, res: Response) {
    try {
      const { user_id } = req.params;

      const showUser = new ShowUserService();

      const user = await showUser.execute({ user_id });

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async update(req: Request, res: Response) {
    try {
      const { password, contact } = req.body;
      const { user_id } = req.params;

      const updateUser = new UpdateUserService();

      const user = await updateUser.execute({
        user_id,
        password,
        contact,
      });

      return res.status(200).json(user);
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
  static async delete(req: Request, res: Response) {
    try {
      const { user_id } = req.params;

      const deleteUser = new DeleteUserService();

      const userDeleted = await deleteUser.execute({ user_id });

      return res.status(200).json({ message: "User deleted successfully." });
    } catch (err) {
      if (err instanceof AppError) {
        AppErrorHandler(err, res);
      }
    }
  }
}
