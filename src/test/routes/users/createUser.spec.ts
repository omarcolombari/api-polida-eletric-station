import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe("POST - /users", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then(res => (connection = res))
      .catch(err => {
        console.error("Error during Data Source initialization", err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test(" Should create an user", async () => {
    const name = "testUser";
    const password = "newUserPassword";
    const contact = "111";
    const cpf = "000";
    const isAdmin = true;

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const response = await request(app)
      .post("/users")
      .send({ name, password, contact, isAdmin: true, cpf });

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body.created_at).toBeDefined();
    expect(response.body.updated_at).toBeDefined();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        name,
        contact,
        cpf,
        isAdmin,
      })
    );
  });
});
