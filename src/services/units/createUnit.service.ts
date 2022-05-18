import { AppDataSource } from "../../data-source";
import Unit from "../../entities/unit.entity";
import { IUnitCreate } from "../../interfaces/unit/unit.interface";

const createUnitService = async ({
  street,
  st_number,
  district,
  voltage,
  cable_meter,
}: IUnitCreate) => {
  const unitRepository = AppDataSource.getRepository(Unit);

  const newUnit = unitRepository.create({
    street,
    st_number,
    district,
    voltage,
    cable_meter,
  });

  await unitRepository.save(newUnit);

  return newUnit;
};

export default createUnitService;
