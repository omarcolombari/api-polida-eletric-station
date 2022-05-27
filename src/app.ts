import express from "express";
import "express-async-errors";
import appRoutes from "./routes";
import errorHandler from "./middlewares/errorHandle.middleware";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

appRoutes(app);

app.use(errorHandler);

export default app;
