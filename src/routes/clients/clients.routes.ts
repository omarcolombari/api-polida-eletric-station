import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";
import ClientController from "../../controllers/client.controller";
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middleware";
import verifyAdminMiddleware from "../../middlewares/verifyAdmin.middleware";
import createClientSchema from "../../validations/createClient.validation";

const clientRouter = Router();

export default () => {
  clientRouter.use(ensureAuthMiddleware);

  clientRouter.post(
    "/",
    expressYupMiddleware({ schemaValidator: createClientSchema }),
    ClientController.store
  );
  clientRouter.get("/", ClientController.index);
  clientRouter.get("/:client_id", ClientController.show);

  clientRouter.use(verifyAdminMiddleware);

  clientRouter.delete("/:client_id", ClientController.delete);
  clientRouter.post("/", ClientController.store);

  return clientRouter;
};
