import { AppDataSource } from "../../data-source";
import Unit from "../../entities/unit.entity";

const deleteUnitService = async (id: string) => {
  const unitRepository = AppDataSource.getRepository(Unit);
  const verifyUnitExists = await unitRepository.findOne({ where: { id } });

  if (!verifyUnitExists) {
    throw new Error("Unit not found");
  }

  await unitRepository.delete(id);

  return true;
};

export default deleteUnitService;
