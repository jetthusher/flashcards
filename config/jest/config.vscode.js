// eslint-disable-next-line @typescript-eslint/no-var-requires
const jestBaseConfig = require("./config")

module.exports = {
  ...jestBaseConfig,
  collectCoverage: true,
}
