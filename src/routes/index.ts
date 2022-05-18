import { Express } from "express";
import clientRouter from "./clients/clients.routes";
import { unitRoutes } from "./units.routes";

export default (app: Express) => {
  app.use("/clients", clientRouter);
  app.use("/units", unitRoutes())
};
