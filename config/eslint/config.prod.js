// Errors on file creation
// https://github.com/typescript-eslint/typescript-eslint/issues/864

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "prefer-arrow",
    "jsdoc",
    "jest-dom",
  ],
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:jsdoc/recommended",
    "plugin:jest-dom/recommended",
  ],
  rules: {
    "func-names": "error",
    "no-constant-condition": "error",
    "no-console": "error",
    "consistent-return": "off",
    "prefer-arrow-callback": [
      "error",
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],

    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],

    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/types.ts",
          "**/*.d.ts",
          "**/*.{test,spec,dev,development}.{js,jsx,ts,tsx}",
          "**/{test,spec,dev,development}.{js,jsx,ts,tsx}",
          "**/{dev,development}/**/*",
          "config/**/*",
          "**/configure*Tester.{ts,tsx,js,jsx}",
        ],
      },
    ],
    "import/extensions": [
      "error",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    "jsdoc/check-syntax": "off",
    "jsdoc/check-types": "off",
    "jsdoc/no-undefined-types": "off",
    "jsdoc/require-example": "off",
    "jsdoc/require-hyphen-before-param-description": "off",
    "jsdoc/require-param-type": "off",
    "jsdoc/require-returns-type": "off",
    "jsdoc/valid-types": "off",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-examples": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/check-param-names": "error",
    "jsdoc/check-tag-names": "error",
    "jsdoc/implements-on-classes": "error",
    "jsdoc/match-description": "error",
    "jsdoc/newline-after-description": "error",
    "jsdoc/no-types": "error",
    "jsdoc/require-description": "error",
    "jsdoc/require-description-complete-sentence": "error",
    "jsdoc/require-param": "error",
    "jsdoc/require-param-description": "error",
    "jsdoc/require-param-name": "error",
    "jsdoc/require-returns": "error",
    "jsdoc/require-returns-check": "error",
    "jsdoc/require-returns-description": "error",

    "react-hooks/rules-of-hooks": "error",

    "react/prop-types": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

    "prettier/prettier": "error",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "never" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as", objectLiteralTypeAssertions: "never" },
    ],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/member-naming": [
      "error",
      {
        private: "^[a-z]",
        public: "^[a-z]",
        protected: "^[a-z]",
      },
    ],
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/no-type-alias": [
      "error",
      {
        allowAliases: "always",
        allowCallbacks: "always",
        allowLiterals: "never",
        allowMappedTypes: "always",
        allowTupleTypes: "always",
      },
    ],
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-empty-function": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
        },
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
      },
    ],
  },
}
