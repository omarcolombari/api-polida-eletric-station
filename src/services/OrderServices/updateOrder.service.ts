import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";
import { AppError } from "../../errors/index";
import { IServiceUpdate } from "../../interfaces/serviceOrder";

export default class UpdateOrderService {
  async execute({ id, status, reschedule }: IServiceUpdate): Promise<ServiceOrder> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);

    const order = await serviceOrderRepository.findOne({
      where: { id },
    });

    if (!order) {
      throw new AppError("Service order not found", 404);
    }

    status ? (order.status = status) : order.status;
    reschedule ? (order.reschedule = reschedule) : order.reschedule;

    return await serviceOrderRepository.save(order);
  }
}
