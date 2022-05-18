import { Router } from "express";
import { UnitsController } from "../controllers/units.controller";

const router = Router();

export const unitRoutes = () => {
  router.post("/", UnitsController.store);
  router.patch("/:unit_id", UnitsController.update);
  router.delete("/:unit_id", UnitsController.delete);

  return router;
};
