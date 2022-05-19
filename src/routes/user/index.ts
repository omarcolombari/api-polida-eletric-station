import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import UserController from "../../controllers/user.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import createUserSchema from "../../validations/createUser.validation";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createUserSchema }),
    UserController.store
  );
  routes.post("/login", UserController.session);
  routes.get(
    "/",
    ensureAuthMiddleware,
    verifyAdminMiddleware,
    UserController.index
  );
  routes.get("/:user_id", ensureAuthMiddleware, UserController.show);
  routes.patch(
    "/:user_id",
    ensureAuthMiddleware,
    verifyAdminMiddleware,
    UserController.update
  );
  routes.delete(
    "/:user_id",
    ensureAuthMiddleware,
    verifyAdminMiddleware,
    UserController.delete
  );

  return routes;
};
