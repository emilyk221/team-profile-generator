const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Jane", 1, "jane@fakemail.com", "janesmith123");

  expect(engineer.name).toBe("Jane");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.stringContaining("@fakemail.com"));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer's github", () => {
  const engineer = new Engineer("Jane", 1, "jane@fakemail.com", "janesmith123");

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("get's engineer's role, overrides employee's role", () => {
  const engineer = new Engineer("Jane", 1, "jane@fakemail.com", "janesmith123");

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});