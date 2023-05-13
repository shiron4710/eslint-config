module.exports = {
  extends: [require.resolve("./index.js"), "plugin:storybook/recommended"],
  rules: {
    "@typescript-eslint/quotes": ["error", "double"]
  }
}
