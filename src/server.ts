import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
  AppDataSource.initialize()
    .then(() => console.log("DataSource running."))
    .catch((err) => console.log("DataSource failed.", err));

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => console.log("App running on port ", PORT));
})();
