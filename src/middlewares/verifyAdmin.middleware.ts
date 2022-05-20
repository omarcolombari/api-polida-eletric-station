import { NextFunction, Request, Response } from "express";
import { AppError, AppErrorHandler } from "../errors";

const verifyAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isAdmin } = req.user;

    if (!isAdmin) {
      throw new AppError("User is not admin.", 409);
    }

    next();
  } catch (err) {
    if (err instanceof AppError) {
      AppErrorHandler(err, res);
    }
  }
};

export default verifyAdminMiddleware;
