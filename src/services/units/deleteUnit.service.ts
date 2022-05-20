import { AppDataSource } from "../../data-source";
import Unit from "../../entities/unit.entity";
import { AppError } from "../../errors";

const deleteUnitService = async (id: string) => {
  const unitRepository = AppDataSource.getRepository(Unit);
  const verifyUnitExists = await unitRepository.findOne({ where: { id } });

  if (!verifyUnitExists) {
    throw new AppError("Unit not found", 404);
  }

  await unitRepository.delete(id);

  return true;
};

export default deleteUnitService;
