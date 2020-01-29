// This is a lighter version of a Stylelint configuration
// that allows a more distraction-free development environment.
// Strict version is used for committed files and when pushing.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const strictConfig = require("./config.prod")

module.exports = {
  ...strictConfig,
  rules: {
    ...strictConfig.rules,
    "order/properties-order": null,
    "plugin/rational-order": null,
    "rule-empty-line-before": null,
  },
}
