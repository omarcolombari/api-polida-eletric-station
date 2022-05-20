import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { IClientID } from "../../interfaces/client/client.interface";
import { AppError } from "../../errors";

export default class ListOneClientService {
  async execute({ id }: IClientID): Promise<Client> {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOne({ where: { id } });

    if (!client) throw new AppError("Client not found", 404);

    return client;
  }
}
