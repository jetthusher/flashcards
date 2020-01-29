module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  rules: {
    "no-empty-source": null,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-rule"],
        ignore: ["after-comment"],
      },
    ],
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
