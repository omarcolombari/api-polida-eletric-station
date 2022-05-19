import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";

describe(" GET - /clients ", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test(" Should list all clients", async () => {
    const response = await request(app).get("/clients");

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });
});
