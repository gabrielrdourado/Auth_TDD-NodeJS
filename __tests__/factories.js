const { factory } = require("factory-girl");
// const faker = require("faker");

const { User } = require("../src/app/models");

factory.define("User", User, {
  name: "user",
  email: "user@example.com",
  password: "123123",
});

module.exports = factory;
