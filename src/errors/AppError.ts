import { NextFunction, Request, Response } from "express";

export class AppError extends Error {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

export const AppErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) =>
  err instanceof AppError
    ? res.status(err.statusCode).json({
        status: "Error",
        message: err.message,
      })
    : res.status(500).json({
        status: "Error",
        message: "Internal server error",
      });
