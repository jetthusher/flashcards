module.exports = {
  branches: [
    { name: "alpha", prerelease: true },
    { name: "beta", prerelease: true },
    { name: "next", prerelease: true },
    "master",
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/git",
  ],
}
