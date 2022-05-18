import { Request, Response } from "express";
import serviceTypeDeleteService from "../../services/serviceType/serviceTypeDelete.service";
import { AppError, handleError } from "../../errors";

const serviceTypeDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.typeId;

    const type = await serviceTypeDeleteService(id);

    return res.status(200).json({ message: "Service type deleted!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default serviceTypeDeleteController;
