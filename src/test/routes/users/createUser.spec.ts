import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe(" POST - /users ", () => {
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

  test(" Should create an user", async () => {
    const name = "testUser";
    const password = "newUserPassword";
    const contact = "111222333";
    const isAdmin = false;
    const created_at = new Date();
    const updated_at = new Date();

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const userData = { name, password, contact, isAdmin };

    const response = await request(app).post("/users").send(userData);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        name,
        password,
        contact,
        created_at,
        updated_at,
      })
    );
  });
});