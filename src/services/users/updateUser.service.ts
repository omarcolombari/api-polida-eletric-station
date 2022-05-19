import { compareSync, hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/users";

export default class UpdateUserService {
  async execute({ user_id, password, contact }: IUserUpdate): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOne({ where: { id: user_id } });

    if (!user) {
      throw new AppError("User not found", 401);
    }

    if (password) {
      if (compareSync(password, user.password)) {
        throw new AppError("Please, inform a different password.", 409);
      }

      user.password = await hash(password, 8);
    }

    contact ? (user.contact = contact) : user.contact;

    await userRepository.save(user);

    return user;
  }
}
