import { Router } from "express";
import OrderServiceController from "../controllers/orderService.controller";

const orderRouter = Router();

orderRouter.post("/", OrderServiceController.store);
orderRouter.get("/all", OrderServiceController.index);
orderRouter.get("/:id", OrderServiceController.show);
orderRouter.get("/me", OrderServiceController.showPerUserId);
orderRouter.patch("/:id", OrderServiceController.update);

export default orderRouter;
