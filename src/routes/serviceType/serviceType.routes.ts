import { Router } from "express";
import ServiceTypeController from "../../controllers/serviceType.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";

const routes = Router();

export const serviceRoutes = () => {
  routes.use(ensureAuthMiddleware);
  routes.use(verifyAdminMiddleware);

  routes.post("/", ServiceTypeController.store);
  routes.get("/", ServiceTypeController.show);
  routes.delete("/:id", ServiceTypeController.delete);

  return routes;
};
