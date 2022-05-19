import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe(" POST - /orders ", () => {
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

  test(" Should create an Order", async () => {
    const userId = "userWorkID";
    const serviceTypeId = "serviceTypeID";
    const unitId = "unitId";
    const status = "Pendent";
    const reschedule = "Remarcado";
    const created_at = new Date();
    const updated_at = new Date();

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const serviceOrderData = {
      userId,
      serviceTypeId,
      unitId,
      status,
      reschedule,
    };

    const response = await request(app).post("/orders").send(serviceOrderData);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        userId,
        serviceTypeId,
        unitId,
        status,
        reschedule,
        created_at,
        updated_at,
      })
    );
  });
});
