import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import { UnitsController } from "../../controllers/units.controller";
import createUnitSchema from "../../validations/createUnit.validation";

const router = Router();

export const unitRoutes = () => {
  router.post(
    "/",
    expressYupMiddleware({ schemaValidator: createUnitSchema }),
    UnitsController.store
  );
  router.patch("/:unit_id", UnitsController.update);
  router.delete("/:unit_id", UnitsController.delete);

  return router;
};
