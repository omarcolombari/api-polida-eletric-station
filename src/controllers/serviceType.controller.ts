import { Request, Response } from "express";
import serviceTypeCreateService from "../services/serviceType/serviceTypeCreate.service";
import serviceTypeDeleteService from "../services/serviceType/serviceTypeDelete.service";
import serviceTypeListService from "../services/serviceType/serviceTypeList.service";

export default class ServiceTypeController {
  static async store(req: Request, res: Response) {
    const data = req.body;

    const serviceType = await serviceTypeCreateService(data);

    return res.status(201).json(serviceType);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    const type = await serviceTypeDeleteService(id);

    return res.status(204).json();
  }

  static async show(req: Request, res: Response) {
    const services = await serviceTypeListService();

    return res.json(services);
  }
}
