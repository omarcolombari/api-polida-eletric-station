import { AppDataSource } from "../../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserId } from "../../interfaces/users";

export default class ShowUserService {
  async execute({ user_id }: IUserId): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User not found.", 401);
    }

    return user;
  }
}
