import { Router } from "express";
import UserController from "../../controllers/user.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post("/", UserController.store);
  routes.post("/login", UserController.session);
  routes.get("/", UserController.index);
  routes.get("/:user_id", UserController.show);
  routes.patch("/:user_id", UserController.update);
  routes.delete(
    "/:user_id",
    ensureAuthMiddleware,
    verifyAdminMiddleware,
    UserController.delete
  );

  return routes;
};
