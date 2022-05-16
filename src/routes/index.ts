import { Express } from "express";
import exampleRoute from "./example";

export default (app: Express) => {
  app.use("/example", exampleRoute());
};
