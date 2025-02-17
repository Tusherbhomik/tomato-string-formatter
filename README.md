# Tomato String Formatter 🍅

A lightweight and versatile JavaScript library for formatting strings. Easily convert strings to `camelCase`, `kebab-case`, `snake_case`, `Title Case`, and remove special characters. Perfect for cleaning and transforming strings in your projects!

Link : https://www.npmjs.com/package/tomato-string-formatter

---

## Installation

Install the package via npm:

```bash
npm install tomato-string-formatter
```

Or via yarn:

```bash
yarn add tomato-string-formatter
```

---

## Usage

### Importing the Library

#### In Node.js:

```javascript
const StringFormatter = require("tomato-string-formatter");
```

#### In the Browser:

```html
<script src="https://unpkg.com/tomato-string-formatter"></script>
<script>
  // Use the global `StringFormatter` object
  console.log(StringFormatter.toCamelCase("hello-world"));
</script>
```

---

## Available Methods

### 1. Convert to camelCase

Converts a string to camelCase.

```javascript
console.log(StringFormatter.toCamelCase("hello-world")); // Output: "helloWorld"
console.log(StringFormatter.toCamelCase("hello_world")); // Output: "helloWorld"
```

### 2. Convert to kebab-case

Converts a string to kebab-case.

```javascript
console.log(StringFormatter.toKebabCase("Hello World")); // Output: "hello-world"
console.log(StringFormatter.toKebabCase("HelloWorld")); // Output: "hello-world"
```

### 3. Convert to snake_case

Converts a string to snake_case.

```javascript
console.log(StringFormatter.toSnakeCase("Hello World")); // Output: "hello_world"
console.log(StringFormatter.toSnakeCase("HelloWorld")); // Output: "hello_world"
```

### 4. Convert to Title Case

Converts a string to Title Case.

```javascript
console.log(StringFormatter.toTitleCase("hello world")); // Output: "Hello World"
```

### 5. Remove Special Characters

Removes special characters from a string and replaces them with spaces.

```javascript
console.log(StringFormatter.removeSpecialCharacters("Hello@World!")); // Output: "Hello World"
```

---

## Examples

### Example 1: Formatting a String

```javascript
const input = "hello_world! This is a test.";
const camelCase = StringFormatter.toCamelCase(input);
const kebabCase = StringFormatter.toKebabCase(input);
const titleCase = StringFormatter.toTitleCase(input);

console.log(camelCase); // Output: "helloWorld!ThisIsATest."
console.log(kebabCase); // Output: "hello-world!-this-is-a-test."
console.log(titleCase); // Output: "Hello_world! This Is A Test."
```

### Example 2: Cleaning a String

```javascript
const dirtyString = "User@Name123!";
const cleanString = StringFormatter.removeSpecialCharacters(dirtyString);

console.log(cleanString); // Output: "User Name123"
```

---

## Testing

This library is thoroughly tested using Jest. To run the tests locally, clone the repository and execute:

```bash
npm test
```

---

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** (`git checkout -b feature/YourFeatureName`).
3. **Commit your changes** (`git commit -m "Add some feature"`).
4. **Push to the branch** (`git push origin feature/YourFeatureName`).
5. **Open a pull request**.

---

## License

This project is licensed under the ISC License. See the LICENSE file for details.

---

Made with ❤️ by **Tusher Bhomik**
