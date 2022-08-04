const path = require("path");
const typescript = require("rollup-plugin-typescript2");

module.exports = {
  input: "index.ts",
  output: [
    {
      file: "dist/index.es.js",
      format: "es",
    },
  ],
  plugins: [typescript()],
};
