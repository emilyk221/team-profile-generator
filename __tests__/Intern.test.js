const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Emily", 1, "emily@fakemail.com", "OSU");

  expect(intern.name).toBe("Emily");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.stringContaining("@fakemail.com"));
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern's school", () => {
  const intern = new Intern("Emily", 1, "emily@fakemail.com", "OSU");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("get's intern's role, overrides employee's role", () => {
  const intern = new Intern("Emily", 1, "emily@fakemail.com", "OSU");

  expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
});