// import example from "../../../services/example.service.ts"
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";

describe("example", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then(res => (connection = res))
      .catch(err => console.log("Error during DataSource initialization", err));
  });

  afterAll(async () => await connection.destroy());

  test("description", async () => {
    // const newData = {...}
    // const testReturn = await exampleService(newData)
    // expect(testReturn).toEqual(
    //   expect.objectContaining({
    //     ...
    //   })
    // )
  });
});
