import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

import * as uuid from "uuid";
jest.mock("uuid");
import * as bcrypt from "bcrypt";

describe(" POST - /clients ", () => {
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

  test(" Should create a Client", async () => {
    const name = "testClient";
    const contact = "111222333";
    const unit = [];
    const created_at = new Date();
    const updated_at = new Date();

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const clientData = { name, contact };

    const response = await request(app).post("/clients").send(clientData);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        name,
        contact,
        unit,
        created_at,
        updated_at,
      })
    );
  });
});
