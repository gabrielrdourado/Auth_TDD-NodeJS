const request = require("supertest");

const app = require("../../src/app");
// const factory = require("../factories");
const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("Authenticate", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = await factory.create("User", {
      password: "123456",
    });
    // const user = await User.create({
    //   email: "user@example.com",
    //   name: "John",
    //   password: "123456",
    // });

    console.log(user);

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });

  // it("should not authenticate with invalid credentials", async () => {
  //   const user = await factory.create("User", {
  //     password: "123123",
  //   });

  //   const response = await request(app).post("/sessions").send({
  //     email: user.email,
  //     password: "345345",
  //   });

  //   expect(response.status).toBe(401);
  // });
});
