import { Router } from "express";
import UserController from "../../controllers/user.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", UserController.store);
  routes.post("/login", UserController.session);
  routes.get("/", UserController.index);
  routes.get("/:user_id", UserController.show);

  return routes;
};
