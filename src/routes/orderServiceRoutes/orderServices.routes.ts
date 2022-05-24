import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import OrderServiceController from "../../controllers/orderService.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import createOrderServiceSchema from "../../validations/createOrderService.validation";
import updateOrderServiceSchema from "../../validations/updateOrderService.validation";

const orderRouter = Router();

export default () => {
  orderRouter.use(ensureAuthMiddleware);
  orderRouter.use(verifyAdminMiddleware);

  orderRouter.post(
    "/",
    expressYupMiddleware({ schemaValidator: createOrderServiceSchema }),
    OrderServiceController.store
  );
  orderRouter.get("/", OrderServiceController.index);
  orderRouter.get("/:id", OrderServiceController.show);
  orderRouter.get("/me", OrderServiceController.showPerUserId);

  orderRouter.patch(
    "/:id",
    expressYupMiddleware({ schemaValidator: updateOrderServiceSchema }),
    OrderServiceController.update
  );

  return orderRouter;
};
