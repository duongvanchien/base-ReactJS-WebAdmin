const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = function (config, env) {
  config.resolve.alias = Object.assign(config.resolve.alias, {
    "@Assets": resolve("./src/Assets/"),
    "@Components": resolve("./src/Components/"),
    "@Constant": resolve("./src/Constant/"),
    "@Navigation": resolve("./src/Navigation/"),
    "@Redux": resolve("./src/Redux/"),
    "@Styles": resolve("./src/Styles/"),
    "@Utils": resolve("./src/Utils/"),
    // etc...
  });
  return config;
};
