import { selectPageTitle } from "."
import getMockState from "../../../utils/dev/getMockState"

describe("App selectors", () => {
  it("should select a page title", () => {
    const state = getMockState({ appPageTitle: "happy" })
    expect(selectPageTitle(state)).toBe("happy")
  })
})
