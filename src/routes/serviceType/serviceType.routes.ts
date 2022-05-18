import { Router } from "express";
// import middleware

import serviceTypeCreateController from "../../controllers/serviceType/serviceTypeCreate.controller";
import serviceTypeDeleteController from "../../controllers/serviceType/serviceTypeDelete.controller";
import serviceTypeListController from "../../controllers/serviceType/serviceTypeList.controller";

const routes = Router();

export const serviceRoutes = () => {
  routes.post("/", serviceTypeCreateController);
  routes.get("/", serviceTypeListController);
  routes.delete("/:service_id", serviceTypeDeleteController);

  // routes.use(middleware);
  // routes.delete("". Controller);

  return routes;
};
