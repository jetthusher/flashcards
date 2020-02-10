module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-private-methods",
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    "@babel/plugin-proposal-do-expressions",
    "@babel/plugin-proposal-logical-assignment-operators",
  ],
}
