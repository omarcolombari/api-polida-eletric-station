import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";

export default class ServiceOrderService {
  async execute(userId: any): Promise<ServiceOrder[]> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);

    const orders = await serviceOrderRepository.find({
      where: { user: userId },
    });

    return orders;
  }
}
