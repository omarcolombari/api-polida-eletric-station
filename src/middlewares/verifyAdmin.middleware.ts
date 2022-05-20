import { NextFunction, Request, Response } from "express";
import { AppError, AppErrorHandler } from "../errors";

const verifyAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    throw new AppError("User is not admin.", 409);
  }

  next();
};

export default verifyAdminMiddleware;
