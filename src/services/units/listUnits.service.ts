import { AppDataSource } from "../../data-source";
import Unit from "../../entities/unit.entity";

const listAllEntitiesService = async () => {
    const unitsRepository = AppDataSource.getRepository(Unit);

    const units = await unitsRepository.find();

    return units;
}

export default listAllEntitiesService;