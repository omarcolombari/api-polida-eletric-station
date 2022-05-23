import { AppDataSource } from "../../data-source";
import ServiceOrder from "../../entities/serviceOrder.entity";
import Unit from "../../entities/unit.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../errors/index";
import {StatusType} from "../../entities/serviceOrder.entity"

interface IServiceOrder {
  userId: string;
  serviceTypeId: string;
  unitId: string;
  status: StatusType;
  reschedule: string;
}

export default class CreateOrderService {
  async execute(data: IServiceOrder): Promise<ServiceOrder> {
    const unitRepository = AppDataSource.getRepository(Unit);
    const serviceOrderRepository = AppDataSource.getRepository(ServiceOrder);
    const userRepository = AppDataSource.getRepository(User);

    const unit = await unitRepository.findOne({
      where: { id: data.unitId },
    });
    if (!unit) {
      throw new AppError("Unit not found", 404);
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
