import { Express } from "express";
import clientRouter from "./clients/clients.routes";
import { userRoutes } from "./user";
import { serviceRoutes } from "./serviceType/serviceType.routes";
import { unitRoutes } from "../routes/units/units.routes";
import orderRoutes from "../routes/orderServiceRoutes/orderServices.routes";

export default (app: Express) => {
  app.use("/clients", clientRouter());
  app.use("/users", userRoutes());
  app.use("/services", serviceRoutes());
  app.use("/units", unitRoutes());
  app.use("/orders", orderRoutes());
};
