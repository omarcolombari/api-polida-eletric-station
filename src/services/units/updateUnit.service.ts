import { AppDataSource } from "../../data-source";
import Unit from "../../entities/unit.entity";
import { IUnitUpdate } from "../../interfaces/unit/unit.interface";

const updateUnitService = async (
  id: string,
  { street, st_number, district, voltage, cable_meter }: IUnitUpdate
) => {
  const unitRepository = AppDataSource.getRepository(Unit);

  const unit = await unitRepository.findOne({ where: { id } });

  if (!unit) {
    throw new Error("Unit not found");
  }

  street ? (unit.street = street) : unit.street;
  st_number ? (unit.st_number = st_number) : unit.st_number;
  district ? (unit.district = district) : unit.district;
  voltage ? (unit.voltage = voltage) : unit.voltage;
  cable_meter ? (unit.cable_meter = cable_meter) : unit.cable_meter;

  return await unitRepository.save(unit);
};

export default updateUnitService;
