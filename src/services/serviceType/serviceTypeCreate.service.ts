import { AppDataSource } from "../../data-source";
import { ServiceType } from "../../entities/serviceType.entity";
import { AppError } from "../../errors";
import { IServiceTypeCreate } from "../../interfaces/serviceTypes";
import { fixedFloat } from "../../utils";

const serviceTypeCreateService = async ({
  type,
  value,
}: IServiceTypeCreate) => {
  const serviceTypeRepository = AppDataSource.getRepository(ServiceType);

  const typelAlreadyExists = await serviceTypeRepository.findOne({
    where: { type },
  });

  if (typelAlreadyExists) {
    throw new AppError(409, "Type already exists");
  }

  const serviceType = new ServiceType();
  serviceType.type = type;
  serviceType.value = fixedFloat(serviceType.value + value);

  serviceTypeRepository.create(serviceType);
  await serviceTypeRepository.save(serviceType);

  return serviceType;
};

export default serviceTypeCreateService;
