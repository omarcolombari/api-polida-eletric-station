import Client from "../../entities/client.entity";
import { AppDataSource } from "../../../data-source";
import { IClientCreate } from "../../interfaces/client/client.interface";
// import AppError from "../../errors";

export default class CreateClientService {
  async execute(data: IClientCreate): Promise<Client> {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = clientRepository.create(data);
    await clientRepository.save(client);

    return client;
  }
}
