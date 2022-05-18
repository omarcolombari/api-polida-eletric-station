import { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { AppError } from "../../errors";

import { IUserCreate } from "../../interfaces/users";

export default class CreateUserService {
  async execute({
    name,
    password,
    contact,
    isAdmin,
  }: IUserCreate): Promise<User> {
    const userRepository = AppDataSource.getRepository(User);

    const checkUserExists = await userRepository.findOne({ where: { name } });

    if (checkUserExists) {
      throw new AppError("User already exists.", 401);
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      password: hashedPassword,
      contact,
      isAdmin,
    });

    await userRepository.save(user);

    return user;
  }
}
