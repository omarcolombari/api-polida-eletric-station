import Client from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { IClientID } from "../../interfaces/client/client.interface";
import { DeleteResult, QueryBuilder, QueryRunner } from "typeorm";
// import AppError from "../../errors";

export default class DeleteClientService {
  async execute({ id }: IClientID): Promise<DeleteResult> {
    const clientRepository = AppDataSource.getRepository(Client);

    const client = await clientRepository.findOne({ where: { id } });

    if (!client) {
      // throw new AppError("Not found any client with this id")
      throw new Error("Not found any client with this id");
    }

    const deleted = clientRepository.query(
      `DELETE FROM clients WHERE id = $1`,
      [id]
    );
    return deleted;
    // return await clientRepository.delete(client);
  }
}
