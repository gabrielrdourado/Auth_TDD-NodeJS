const request = require("supertest");

const { User } = require("../../src/app/models");
const app = require("../../src/app");
const truncate = require("../utils/truncate");

describe("Authenticate", () => {
  beforeAll(() => {
    jest.setTimeout(90 * 1000);
  });

  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = new User({
      email: "user@example.com",
      name: "user",
      password_hash: "sdfsdfshf44511",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "senha123",
    });

    expect(response.status).toBe(200);
  });
});
