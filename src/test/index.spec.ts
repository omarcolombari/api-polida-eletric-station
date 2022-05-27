import { DataSource } from "typeorm";
import { AppDataSource } from "../data-source";
import request from "supertest";
import app from "../app";

import * as uuid from "uuid";
jest.mock("uuid");

describe("Integration", () => {
  let connection: DataSource;
  let token: string = "";
  let userId: string = "";
  let serviceTypeId: string = "";
  let clientId: string = "";
  let unitId: string = "";
  let serviceOrderId: string = "";

  const user = {
    name: "testUser",
    password: "newUserPassword",
    contact: "111",
    cpf: "000",
    isAdmin: true,
  };

  const serviceType = {
    name: "test service type",
    price: 10,
  };

  const client = {
    name: "Client test",
    contact: "Contact test",
  };

  const unit = {
    street: "test street",
    st_number: 0,
    district: "test district",
    voltage: 1,
    cable_meter: 10,
    clientId,
  };

  const serviceOrder = {
    userId,
    serviceTypeId,
    unitId,
    status: "Aberto",
    reschedule: "Nao",
  };

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

  // USERS
  test("Should create an user", async () => {
    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("user-uuid");

    const response = await request(app).post("/users").send(user);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body.created_at).toBeDefined();
    expect(response.body.updated_at).toBeDefined();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "user-uuid",
        name: user.name,
        contact: user.contact,
        cpf: user.cpf,
        isAdmin: user.isAdmin,
      })
    );

    userId = response.body.id;
    serviceOrder.userId = response.body.id;
  });

  test("Should log in an user", async () => {
    const password = "newUserPassword";
    const cpf = "000";

    const response = await request(app)
      .post("/users/login")
      .send({ cpf, password });

    expect(response.status).toBe(200);

    token = response.body.token;
  });

  test("Should list all users", async () => {
    const response = await request(app)
      .get("/users")
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });

  test("Should list one user", async () => {
    const response = await request(app)
      .get(`/users/${userId}`)
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: userId,
        name: user.name,
        contact: user.contact,
        cpf: user.cpf,
        isAdmin: user.isAdmin,
      })
    );
  });

  test("Should update one user", async () => {
    const response = await request(app)
      .patch(`/users/${userId}`)
      .set("Authorization", "Bearer " + token)
      .send({
        contact: "test update",
      });

    expect(response.status).toBe(200);

    expect(response.body.contact).toEqual("test update");
  });

  // SERVICE TYPE
  test("Should create one service type", async () => {
    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("serviceType-uuid");

    const response = await request(app)
      .post("/services")
      .set("Authorization", "Bearer " + token)
      .send(serviceType);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "serviceType-uuid",
        name: serviceType.name,
        price: serviceType.price,
      })
    );

    serviceTypeId = response.body.id;
    serviceOrder.serviceTypeId = response.body.id;
  });

  test("Should list all service types", async () => {
    const response = await request(app)
      .get("/services")
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });

  // CLIENTS
  test("Should create one client", async () => {
    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("client-uuid");

    const response = await request(app)
      .post("/clients")
      .set("Authorization", "Bearer " + token)
      .send(client);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "client-uuid",
        name: client.name,
        contact: client.contact,
      })
    );

    clientId = response.body.id;
    unit.clientId = response.body.id;
  });

  test("Should list all client", async () => {
    const response = await request(app)
      .get("/clients")
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });

  test("Should list one client", async () => {
    const response = await request(app)
      .get(`/clients/${clientId}`)
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: clientId,
        name: client.name,
        contact: client.contact,
      })
    );
  });

  // UNITS
  test("Should create one unit", async () => {
    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("unit-uuid");

    const response = await request(app)
      .post("/units")
      .set("Authorization", "Bearer " + token)
      .send(unit);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        id: "unit-uuid",
        street: unit.street,
        st_number: unit.st_number,
        district: unit.district,
        voltage: unit.voltage,
        cable_meter: unit.cable_meter,
        clientId,
      })
    );

    unitId = response.body.id;
    serviceOrder.unitId = response.body.id;
  });

  test("Should all units", async () => {
    const response = await request(app)
      .get(`/units`)
      .set("Authorization", "Bearer " + token);
    
    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map")
  });

  test("Should update one unit", async () => {
    const response = await request(app)
      .patch(`/units/${unitId}`)
      .set("Authorization", "Bearer " + token)
      .send({
        street: "test update",
      });

    expect(response.status).toBe(200);

    expect(response.body.street).toEqual("test update");
  });

  // SERVICE ORDER
  test("Should create one service order", async () => {
    const uuidSpy = jest.spyOn(uuid, "v4");
    uuidSpy.mockReturnValue("serviceOrder-uuid");

    const response = await request(app)
      .post("/orders")
      .set("Authorization", "Bearer " + token)
      .send(serviceOrder);

    expect(response.status).toBe(201);

    expect(uuidSpy).toHaveBeenCalled();

    expect(response.body).toEqual(
      expect.objectContaining({
        userId,
        serviceTypeId,
        unitId,
        status: "Aberto",
        reschedule: "Nao",
      })
    );

    serviceOrderId = response.body.id;
  });

  test("Should list all service orders", async () => {
    const response = await request(app)
      .get("/orders")
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });

  test("Should list one service order", async () => {
    const response = await request(app)
      .get(`/orders/${serviceOrderId}`)
      .set("Authorization", "Bearer " + token);

    const unit = await request(app)
      .get(`/clients/${clientId}`)
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: serviceOrderId,
        userId: serviceOrder.userId,
        serviceTypeId: serviceOrder.serviceTypeId,
        unitId: serviceOrder.unitId,
        status: "Aberto",
        reschedule: "Nao",
        unit: unit.body.units[0],
      })
    );
  });

  test("Should list service orders from user", async () => {
    const response = await request(app)
      .get(`/orders/me`)
      .set("Authorization", "Bearer " + token);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("map");
  });

  test("Should update one order service", async () => {
    const response = await request(app)
      .patch(`/orders/${serviceOrderId}`)
      .set("Authorization", "Bearer " + token)
      .send({
        reschedule: "Test edit",
      });
    expect(response.status).toBe(200);

    expect(response.body.reschedule).toEqual("Test edit");
  });

  test("Should delete an client", async () => {
    const response = await request(app)
      .delete(`/orders/${clientId}`)
      .set("Authorization", "Bearer " + token);
  });

});

