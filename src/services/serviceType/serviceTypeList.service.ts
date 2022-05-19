import { AppDataSource } from "../../data-source";
import  ServiceType  from "../../entities/serviceType.entity";

const serviceTypeListService = async () => {
  const serviceTypeRepository = AppDataSource.getRepository(ServiceType);

  const serviceTypeList = await serviceTypeRepository.find();

  return serviceTypeList;
};

export default serviceTypeListService;
