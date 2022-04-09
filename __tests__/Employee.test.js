const Employee = require("../lib/Employee");

test("creates an Employee object", () => {
  const employee = new Employee("John", 1, "john@fakemail.com");

  expect(employee.name).toBe("John");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining("@fakemail.com"));
})