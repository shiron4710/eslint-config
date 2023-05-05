module.exports = {
  extends: [require.resolve("./index.js"), "plugin:@next/next/core-web-vitals"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"]
  }
}
