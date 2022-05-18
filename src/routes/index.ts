import { Express } from "express";
import clientRouter from "./clients/clients.routes";

export default (app: Express) => {
  app.use("/clients", clientRouter);
};
