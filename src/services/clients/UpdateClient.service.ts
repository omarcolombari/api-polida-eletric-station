import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { IClientUpdate } from "../../interfaces/client/client.interface";
// import AppError from "../../errors";

export default class UpdateClientService {
  async execute({ id, contact, name }: IClientUpdate): Promise<Client> {
    const clientRepository = AppDataSource.getRepository(Client);
    const client = await clientRepository.findOne({ where: { id } });

    if (!client) {
      // throw new AppError("Not found any client with this id")
      throw new Error("Not found any client with this id");
    }

    contact ? (client.contact = contact) : client.contact;
    name ? (client.name = name) : client.name;

    return clientRepository.save(client);
  }
}
