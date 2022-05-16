import express from "express";
import "express-async-errors";
import appRoutes from "./routes";
//import errorHandler from "...";

const app = express();

app.use(express.json());

appRoutes(app);

//app.use(errorHandler);

export default app;
