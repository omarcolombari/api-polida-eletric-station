import { Request, Response } from "express";
import { IServiceType } from "../../interfaces/serviceTypes";
import serviceTypeListService from "../../services/serviceType/serviceTypeList.service";

const serviceTypeListController = async (req: Request, res: Response) => {
  const serviceTypeList: IServiceType[] = await serviceTypeListService();

  return res.json(serviceTypeList);
};

export default serviceTypeListController;
