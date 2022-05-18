import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";

export default class ShowOrderPerIdService {
  async execute(userId: any): Promise<ServiceOrder[]> {
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);

    const orders = await serviceOrderRepository.find({
      where: { id: userId },
    })

    return orders;
  }
}
