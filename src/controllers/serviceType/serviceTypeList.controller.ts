import { Request, Response } from "express";
import serviceTypeListService from "../../services/serviceType/serviceTypeList.service";

const serviceTypeListController = async (req: Request, res: Response) => {
  const serviceTypeList = await serviceTypeListService();

  return res.json(serviceTypeList);
};

export default serviceTypeListController;
