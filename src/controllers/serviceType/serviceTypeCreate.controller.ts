import { Request, Response } from "express";
import { AppError, AppErrorHandler } from "../../errors";
import { IServiceType } from "../../interfaces/serviceTypes";
import serviceTypeCreateService from "../../services/serviceType/serviceTypeCreate.service";

const serviceTypeCreateController = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    const serviceType: IServiceType = await serviceTypeCreateService(data);

    return res.status(201).json(serviceType);
  } catch (err) {
    if (err instanceof AppError) {
      AppErrorHandler(err, res);
    }
  }
};

export default serviceTypeCreateController;
