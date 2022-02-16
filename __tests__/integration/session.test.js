const { User } = require("../../src/app/models");

describe("Authenticate", () => {
  it("should sum two numbers", async () => {
    const user = await User.create({
      name: "Gabriel",
      email: "gabriel@gmail.com",
      password_hash: "abcdefghijklmnopqrstuvwxyz",
    });

    console.log(user);

    expect(user.email).toBe("gabriel@gmail.com");
  });
});
