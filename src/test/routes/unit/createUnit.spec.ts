import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import app from "../../../../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe(" POST - /units ", () => {
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

  test(" Should create a unit", async () => {
    const street = "nameOfStreet";
    const st_number = 111;
    const district = "where";
    const voltage = "X volts";
    const cable_meter = 10;
    const clientId = "umClienteQualquer";

    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("some-uuid");

    const unitData = {
      street,
      st_number,
      district,
      voltage,
      cable_meter,
      clientId,
    };

    const response = await request(app).post("/units").send(unitData);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "some-uuid",
        street,
        st_number,
        district,
        voltage,
        cable_meter,
        clientId,
      })
    );
  });
});
