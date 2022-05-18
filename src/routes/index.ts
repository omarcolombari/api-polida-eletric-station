import { Express } from "express";
import { serviceRoutes } from "./serviceType/serviceType.routes";

export default (app: Express) => {
  app.use("/services", serviceRoutes());
};
