import {
  createChangePageTitleAction,
  createChangeThemeAction,
} from "../actions"
import appReducer from "./appReducer"
import { AppTheme } from "../themes/types"

describe("App reducers", () => {
  it("should set a new page title", () => {
    const title = "Make me happy"
    const action = createChangePageTitleAction(title)
    const reduced = appReducer(undefined, action)
    expect(reduced.pageTitle).toBe(title)
  })

  it("should set a different theme", () => {
    const theme: AppTheme = {
      backgroundColor: "haha",
      textColor: "hahahah",
    }

    const action = createChangeThemeAction(theme)
    const reduced = appReducer(undefined, action)
    expect(reduced.theme).toEqual(theme)
  })
})
