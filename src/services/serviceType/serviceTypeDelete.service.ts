import { AppDataSource } from "../../data-source";
import ServiceType from "../../entities/serviceType.entity";
import { AppError } from "../../errors";

const serviceTypeDeleteService = async (id: string) => {
  const serviceTypeRepository = AppDataSource.getRepository(ServiceType);

  const service = await serviceTypeRepository.findOne({ where: { id } });

  if (!service) throw new AppError("Service not found", 404);

  await serviceTypeRepository.delete(service.id);

  return true;
};

export default serviceTypeDeleteService;
