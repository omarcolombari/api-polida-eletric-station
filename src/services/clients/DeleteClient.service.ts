import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { IClientID } from "../../interfaces/client/client.interface";
import { DeleteResult } from "typeorm";
import { AppError } from "../../errors";

export default class DeleteClientService {
  async execute({ id }: IClientID): Promise<DeleteResult> {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOne({ where: { id } });
    if (!client) {
      throw new AppError("Client not found", 404);
    }

    return await clientRepository.delete(client.id);
  }
}
