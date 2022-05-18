import { Express } from "express";
import exampleRoute from "./example";
import { userRoutes } from "./user";

export default (app: Express) => {
  app.use("/example", exampleRoute());
  app.use("/users", userRoutes());
};
