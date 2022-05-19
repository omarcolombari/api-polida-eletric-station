import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
// import middleware

import serviceTypeCreateController from "../../controllers/serviceType/serviceTypeCreate.controller";
import serviceTypeDeleteController from "../../controllers/serviceType/serviceTypeDelete.controller";
import serviceTypeListController from "../../controllers/serviceType/serviceTypeList.controller";
import createServiceTypeSchema from "../../validations/createServiceType.validation";

const routes = Router();

export const serviceRoutes = () => {
  routes.post(
    "/",
    expressYupMiddleware({ schemaValidator: createServiceTypeSchema }),
    serviceTypeCreateController
  );
  routes.get("/", serviceTypeListController);
  routes.delete("/:id", serviceTypeDeleteController);

  // routes.use(middleware);
  // routes.delete("". Controller);

  return routes;
};
