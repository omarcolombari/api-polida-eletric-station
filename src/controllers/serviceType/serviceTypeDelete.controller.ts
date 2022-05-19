import { Request, Response } from "express";
import serviceTypeDeleteService from "../../services/serviceType/serviceTypeDelete.service";
import { AppError, AppErrorHandler } from "../../errors";

const serviceTypeDeleteController = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;

    const type = await serviceTypeDeleteService(id);

    return res.status(200).json({ message: "Service type deleted!" });
  } catch (err) {
    if (err instanceof AppError) {
      AppErrorHandler(err, res);
    }
  }
};

export default serviceTypeDeleteController;
