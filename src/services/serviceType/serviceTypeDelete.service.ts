import { AppDataSource } from "../../data-source";
import { ServiceType } from "../../entities/serviceType.entity";

const serviceTypeDeleteService = async (id: string) => {
  const serviceTypeRepository = AppDataSource.getRepository(ServiceType);

  const serviceTypes = await serviceTypeRepository.find();

  const service = serviceTypes.find((data) => data.type === id);

  await serviceTypeRepository.delete(service!.id);

  return true;
};

export default serviceTypeDeleteService;
