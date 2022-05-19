import { Express } from "express";
import clientRouter from "./clients/clients.routes";
import { userRoutes } from "./user";
import { serviceRoutes } from "./serviceType/serviceType.routes";

export default (app: Express) => {
  app.use("/clients", clientRouter());
  app.use("/users", userRoutes());
  app.use("/services", serviceRoutes());
};
