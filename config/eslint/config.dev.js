// This is a lighter version of an ESLint configuration
// that allows a more distraction-free development environment.
// Strict version is used for committed files and when pushing.

// eslint-disable-next-line @typescript-eslint/no-var-requires
const strictConfig = require("./config.prod")

module.exports = {
  ...strictConfig,
  parserOptions: {
    ...strictConfig.parserOptions,
    // The issue: https://github.com/typescript-eslint/typescript-eslint/issues/864
    // The workaround: https://github.com/typescript-eslint/typescript-eslint/issues/864#issuecomment-538167956
    createDefaultProgram: true,
  },
  rules: {
    ...strictConfig.rules,
    "prefer-const": "off",
    "func-names": "off",
    "require-yield": "off",
    "no-empty": "off",
    "no-console": "off",
    "no-unused-expressions": "off",
    "lines-between-class-members": "off",
    "prefer-arrow-callback": "off",
    "arrow-body-style": "off",
    "object-shorthand": "off",
    "no-dupe-keys": "off",
    "no-sparse-arrays": "off",

    "import/order": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-useless-path-segments": "off",

    "prefer-arrow/prefer-arrow-functions": "off",

    "react/self-closing-comp": "off",
    "react/jsx-indent": "off",
    "react/button-has-type": "off",
    "react/jsx-max-props-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",

    "jsx-a11y/control-has-associated-label": "off",

    "prettier/prettier": "off",

    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/prefer-readonly": "off",
    "@typescript-eslint/require-array-sort-compare": "off",
    "@typescript-eslint/unified-signatures": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/class-name-casing": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-type-arguments": "off",
  },
}
