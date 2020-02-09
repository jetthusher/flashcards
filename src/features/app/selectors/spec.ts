import { getPageTitle, getAppState, getTheme } from "."
import getMockedState from "../../../store/getMockedState"
import darkTheme from "../themes/dark"

describe("App selectors", () => {
  const state = getMockedState({
    appPageTitle: "happy",
  })

  it("should select app state", () => {
    expect(getAppState(state)).toEqual({
      pageTitle: "happy",
      theme: darkTheme,
    })
  })

  it("should select a page title", () => {
    expect(getPageTitle(state)).toBe("happy")
  })

  it("should select theme", () => {
    expect(getTheme(state)).toEqual(darkTheme)
  })
})
