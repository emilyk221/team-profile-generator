const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("John", 1, "john@fakemail.com");

  expect(employee.name).toBe("John");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@fakemail.com"));
});

test("get employee's name, id, and email", () => {
  const employee = new Employee("John", 1, "john@fakemail.com");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
  expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("get employee's role", () => {
  const employee = new Employee("John", 1, "john@fakemail.com");

  expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
})