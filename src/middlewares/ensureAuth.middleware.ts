import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError, AppErrorHandler } from "../errors";

const ensureAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError("Token is missing.", 401);
    }

    verify(
      token as string,
      process.env.JWT_SECRET as string,
      (err: any, decoded: any) => {
        if (err) {
          throw new AppError("Invalid Token", 401);
        }

        const { sub, isAdmin, name } = decoded;

        req.user = { id: sub, name, isAdmin };

        next();
      }
    );
  } catch (err) {
    if (err instanceof AppError) {
      AppErrorHandler(err, res);
    }
  }
};

export default ensureAuthMiddleware;
