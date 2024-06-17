const { config } = require("@swc/core/spack");

module.exports = config({
  target: "browser",
  entry: {
    web: __dirname + "/src/index.ts",
  },
  output: {
    path: __dirname + "/lib",
    name: "index.js",
  },
  module: {},
});
