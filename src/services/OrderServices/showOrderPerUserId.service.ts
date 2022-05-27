import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";
import { AppError } from "../../errors";

export default class ShowOrderPerIdService {
  async execute(userId: string): Promise<ServiceOrder[]> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);
    const orders = await serviceOrderRepository.find({
      where: { userId },
    });

    if (!orders)
      throw new AppError("No service orders found for this user.", 404);

    return orders;
  }
}
