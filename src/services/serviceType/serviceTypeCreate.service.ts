import { AppDataSource } from "../../data-source";
import ServiceType from "../../entities/serviceType.entity";
import { AppError } from "../../errors";
import { IServiceTypeCreate } from "../../interfaces/serviceTypes";
import { fixedFloat } from "../../utils";

const serviceTypeCreateService = async ({
  type,
  price,
}: IServiceTypeCreate) => {
  const serviceTypeRepository = AppDataSource.getRepository(ServiceType);

  const typelAlreadyExists = await serviceTypeRepository.findOne({
    where: { name: type },
  });

  if (typelAlreadyExists) {
    throw new AppError("Type already exists", 409);
  }

  const serviceType = new ServiceType();
  serviceType.name = type;
  serviceType.price = fixedFloat(price);

  serviceTypeRepository.create(serviceType);
  await serviceTypeRepository.save(serviceType);

  return serviceType;
};

export default serviceTypeCreateService;
