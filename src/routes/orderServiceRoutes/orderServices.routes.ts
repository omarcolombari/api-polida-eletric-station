import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import OrderServiceController from "../../controllers/orderService.controller";
import createOrderServiceSchema from "../../validations/createOrderService.validation";

const orderRouter = Router();

export default () => {
  orderRouter.post(
    "/",
    expressYupMiddleware({ schemaValidator: createOrderServiceSchema }),
    OrderServiceController.store
  );
  orderRouter.get("/", OrderServiceController.index);
  orderRouter.get("/:id", OrderServiceController.show);
  orderRouter.get("/me", OrderServiceController.showPerUserId);
  orderRouter.patch("/:id", OrderServiceController.update);

  return orderRouter;
};
