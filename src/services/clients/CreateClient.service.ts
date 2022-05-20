import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { IClientCreate } from "../../interfaces/client/client.interface";
import { AppError } from "../../errors";

export default class CreateClientService {
  async execute({ name, contact }: IClientCreate): Promise<Client> {
    const clientRepository = AppDataSource.getRepository(Client);

    const checkClientAvailability = await clientRepository.findOne({
      where: { contact },
    });

    if (checkClientAvailability) {
      throw new AppError("client already exists", 401);
    }

    const client = clientRepository.create({ name, contact });
    await clientRepository.save(client);

    return client;
  }
}
