module.exports = {
  syntax: "scss",
  extends: [
    "stylelint-config-standard",
    "stylelint-order",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: [
    "stylelint-prettier",
    "stylelint-order",
    "stylelint-config-rational-order/plugin",
  ],
  rules: {
    "value-keyword-case": null,
    "no-empty-source": null,
    "declaration-empty-line-before": "never",
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignoreAtRules: ["import"],
      },
    ],
    "block-closing-brace-newline-after": "always",
    "block-opening-brace-space-before": "always",
    "prettier/prettier": true,
    "order/properties-order": [[], { severity: "error" }],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
        "severity": "error",
      },
    ],
  },
}
