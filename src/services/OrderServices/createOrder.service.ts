import { AppDataSource } from "../../data-source";
import Client from "../../entities/client.entity";
import ServiceOrder from "../../entities/serviceOrder.entity";
import User from "../../entities/user.entity";
import {AppError} from "../../errors/index";

interface IServiceOrder {
  userId: string;
  serviceId: string;
  clientId: string;
  status: string;
  reschedule?: string;
}

export default class CreateOrderService {
  async execute(data: IServiceOrder): Promise<ServiceOrder> {
    const clientRepository = AppDataSource.getRepository(Client);
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);
    const userRepository = AppDataSource.getRepository(User);

    const client = await clientRepository.findOne({
      where: { id: data.clientId },
    });
    if (!client) {
      throw new AppError("Client not found", 404);
    }

    const user = await userRepository.findOne({ where: { id: data.userId } });
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const newOrder = serviceOrderRepository.create(data);
    await serviceOrderRepository.save(newOrder);

    return newOrder;
  }
}
