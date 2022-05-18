import { Express } from "express";
import orderRoutes from "./orderServices.routes";

export default (app: Express) => {
  app.use("/orders", orderRoutes);
};
