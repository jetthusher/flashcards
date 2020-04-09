/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process")

const isDocker = () => {
  try {
    execSync("grep docker /proc/1/cgroup")
    return true
  } catch {
    return false
  }
}

module.exports = {
  isDocker,
}
