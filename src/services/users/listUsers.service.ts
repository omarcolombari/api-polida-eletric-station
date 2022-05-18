import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";

export default class listUsersService {
  async execute() {
    const userRepository = AppDataSource.getRepository(User);

    const users = await userRepository.find();

    return users;
  }
}
