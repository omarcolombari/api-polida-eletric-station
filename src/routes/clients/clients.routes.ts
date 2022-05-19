import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import ClientController from "../../controllers/client.controller";
import createClientSchema from "../../validations/createClient.validation";

const clientRouter = Router();

export default () => {
  clientRouter.post(
    "/",
    expressYupMiddleware({ schemaValidator: createClientSchema }),
    ClientController.store
  );
  clientRouter.get("/", ClientController.index);
  clientRouter.get("/:client_id", ClientController.show);
  clientRouter.delete("/:client_id", ClientController.delete);

  return clientRouter;
};
