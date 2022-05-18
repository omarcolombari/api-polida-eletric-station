import { DataSource } from "typeorm";
import { AppDataSource } from "../../data-source";
import request from "supertest";
import app from "../../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe(" POST - /services ", () => {
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

  test(" Should create a service type", async () => {
    const service_type = "nameOfService";
    const value = 111.11;

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const serviceData = { service_type, value };

    const response = await request(app).post("/services").send(serviceData);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        service_type,
        value,
      })
    );
  });
});
