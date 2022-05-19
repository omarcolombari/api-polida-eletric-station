import { Router } from "express";
import { UnitsController } from "../../controllers/units.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";

const router = Router();

export const unitRoutes = () => {
  router.use(ensureAuthMiddleware);
  router.use(verifyAdminMiddleware);

  router.post("/", UnitsController.store);
  router.patch("/:unit_id", UnitsController.update);
  router.delete("/:unit_id", UnitsController.delete);

  return router;
};
