import { getPageTitle } from "."
import getMockedState from "../../../utils/dev/getMockedState"

describe("App selectors", () => {
  it("should select a page title", () => {
    const state = getMockedState({ appPageTitle: "happy" })
    expect(getPageTitle(state)).toBe("happy")
  })
})
