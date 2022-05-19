import { AppDataSource } from "../../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserId } from "../../interfaces/users";

export default class DeleteUserService {
  async execute({ user_id }: IUserId) {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User not found.", 401);
    }

    await userRepository.delete(user.id);

    return true;
  }
}
