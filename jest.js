module.exports = {
  env: {
    "jest/globals": true,
    node: true
  },
  extends: [require.resolve("./index.js"), "plugin:jest/recommended"]
}
