// string-formatter Library

const StringFormatter = {
  /**
   * Convert a string to camelCase
   * Example: "hello-world" -> "helloWorld"
   */
  toCamelCase: (str) => {
    return str
      .toLowerCase()
      .replace(/[-_]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
  },

  /**
   * Convert a string to kebab-case
   * Example: "Hello World" -> "hello-world"
   */
  toKebabCase: (str) => {
    return str
      .replace(/\s+/g, "-")
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .toLowerCase();
  },

  /**
   * Convert a string to snake_case
   * Example: "Hello World" -> "hello_world"
   */
  toSnakeCase: (str) => {
    return str
      .replace(/\s+/g, "_")
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .toLowerCase();
  },

  /**
   * Convert a string to Title Case
   * Example: "hello world" -> "Hello World"
   */
  toTitleCase: (str) => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  },

  /**
   * Remove special characters from a string
   * Example: "Hello@World!" -> "Hello World"
   */
  removeSpecialCharacters: (str) => {
    return str.replace(/[^\w\s]/g, " ").trim();  // Replace special characters with a space and trim
  }
};

module.exports = StringFormatter; // Export for Node.js

// Make it available globally in browsers
if (typeof window !== "undefined") {
  window.StringFormatter = StringFormatter;
}
