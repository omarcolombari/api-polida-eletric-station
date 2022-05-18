// import { NextFunction, Request, Response } from "express";
// import { verify } from "jsonwebtoken";
// import { AppError, AppErrorHandler } from "../errors";

// const ensureAuthMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//       throw new AppError("Token is missing.", 401);
//     }

//     verify(
//       token as string,
//       process.env.JWT_SECRET as string,
//       (err: any, decoded: any) => {
//         if (err) {
//           throw new AppError("Invalid Token", 401);
//         }
//         req.userName = decoded.name;
//         next();
//       }
//     );
//   } catch (err) {
//     if (err instanceof AppError) {
//       AppErrorHandler(err, res);
//     }
//   }
// };

// export default ensureAuthMiddleware;

// const [, token] = authHeader.split(" ");

// const secret = process.env.JWT_SECRET || "default";

// const decoded = verify(token, secret);

// const { sub } = decoded;

// req.user = { id: sub as string };
