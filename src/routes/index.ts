import { Express } from "express";
import clientRouter from "./clients/clients.routes";
import { userRoutes } from "./user";

export default (app: Express) => {
  app.use("/clients", clientRouter());
  app.use("/users", userRoutes());
};
