import { Router } from "express";
import ServiceTypeController from "../../controllers/serviceType.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import { expressYupMiddleware } from "express-yup-middleware";
// import middleware

import createServiceTypeSchema from "../../validations/createServiceType.validation";

const routes = Router();

export const serviceRoutes = () => {
  routes.use(ensureAuthMiddleware);
  routes.use(verifyAdminMiddleware);

  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createServiceTypeSchema }),
    ServiceTypeController.store
  );
  routes.get("/", ServiceTypeController.show);
  routes.delete("/:id", ServiceTypeController.delete);

  return routes;
};
