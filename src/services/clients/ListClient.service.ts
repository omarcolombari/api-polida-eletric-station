import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";

export default class ListClientService {
  async execute(): Promise<Client[]> {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.find();

    return client;
  }
}
