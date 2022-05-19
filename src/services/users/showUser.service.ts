import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserIds } from "../../interfaces/users";

export default class ShowUserService {
  async execute({ user_id, id, isAdmin }: IUserIds): Promise<User> {
    if (id !== user_id && !isAdmin) {
      throw new AppError("You can only access your own user.", 400);
    }

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User not found.", 401);
    }

    return user;
  }
}
