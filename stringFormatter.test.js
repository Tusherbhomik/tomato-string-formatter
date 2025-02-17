const StringFormatter = require("./index");

test("Convert to camelCase", () => {
  expect(StringFormatter.toCamelCase("hello-world")).toBe("helloWorld");
});

test("Convert to kebab-case", () => {
  expect(StringFormatter.toKebabCase("Hello World")).toBe("hello-world");
});

test("Convert to snake_case", () => {
  expect(StringFormatter.toSnakeCase("Hello World")).toBe("hello_world");
});

test("Convert to Title Case", () => {
  expect(StringFormatter.toTitleCase("hello world")).toBe("Hello World");
});

test("Remove special characters", () => {
  expect(StringFormatter.removeSpecialCharacters("Hello@World!")).toBe("Hello World");
});
