import { Request, Response } from "express";
import CreateOrderService from "../services/OrderServices/createOrder.service";
import listOrderService from "../services/OrderServices/listOrders.service";
import ShowOrderService from "../services/OrderServices/showOrder.service";
import ShowOrderPerIdService from "../services/OrderServices/showOrderPerUserId.service";
import UpdateOrderService from "../services/OrderServices/updateOrder.service";

export default class OrderServiceController {
  static async store(req: Request, res: Response) {
    const { userId, clientId, serviceId, status, reschedule } = req.body;
    const createOrder = new CreateOrderService();
    const order = await createOrder.execute({
      userId,
      clientId,
      serviceId,
      status,
      reschedule,
    });
    return res.status(201).json(order);
  }
  static async index(req: Request, res: Response) {
    const listOrders = new listOrderService();
    const orders = await listOrders.execute();
    return res.json(orders);
  }
  static async show(req: Request, res: Response) {
    const { id } = req.params;
    const showOrder = new ShowOrderService();
    const order = await showOrder.execute(id);
    return res.json(order);
  }
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { status, reschedule } = req.body;
    const updateOrder = new UpdateOrderService();
    const updatedOrder = await updateOrder.execute({ id, reschedule, status });
    return res.status(201).json(updatedOrder);
  }

  static async showPerUserId(req: Request, res: Response) {
    const { id } = req.user;
    const showOrderPerIdService = new ShowOrderPerIdService();
    const orders = await showOrderPerIdService.execute(id);
  }
}
