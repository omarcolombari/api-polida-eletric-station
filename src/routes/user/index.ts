import { Router } from "express";
import UserController from "../../controllers/user.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", UserController.store);
  routes.post("/login", UserController.session);

  routes.use(ensureAuthMiddleware);

  routes.get("/:user_id", UserController.show);

  routes.use(verifyAdminMiddleware);

  routes.get("/", UserController.index);
  routes.patch("/:user_id", UserController.update);
  routes.delete("/:user_id", UserController.delete);

  return routes;
};
