/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path")
const { readFileSync } = require("fs")
const babelConfig = require("../babel.config")

const ignoreFile = resolve(__dirname, "../ignorePatterns")
const ignorePatterns = readFileSync(ignoreFile, "utf8")
  .trim()
  .split("\n")

module.exports = {
  errorOnDeprecated: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/index.{ts,tsx,js,jsx}",
    "!src/**/configure*Tester.{ts,tsx,js,jsx}",
  ],
  globals: {
    "ts-jest": { babelConfig },
  },
  coverageDirectory: resolve(".", "coverage"),
  setupFilesAfterEnv: [resolve(__dirname, "testSetup.js")],
  rootDir: resolve("."),
  testMatch: [
    "**/*.(spec|test).{ts,tsx,js,jsx}",
    "**/(spec|test).{ts,tsx,js,jsx}",
  ],
  testPathIgnorePatterns: ignorePatterns,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": resolve(__dirname, "babelTransform.js"),
  },
}
