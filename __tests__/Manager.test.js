const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates a Manager object", () => {
  const manager = new Manager("Jared", 1, "jared@fakemail.com", 200);

  expect(manager.name).toBe("Jared");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.stringContaining("@fakemail.com"));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("get's manager's role, overrides employee's role", () => {
  const manager = new Manager("Jared", 1, "jared@fakemail.com", 200);

  expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
});