import { createChangePageTitleAction, createChangeThemeAction } from "."
import { AppActionTypes } from "../types"
import { AppTheme } from "../themes/types"

const { ChangePageTitle, ChangeTheme } = AppActionTypes

describe("App actions", () => {
  it("should create a valid change title action", () => {
    expect(createChangePageTitleAction("Make me happy")).toEqual({
      type: ChangePageTitle,
      payload: "Make me happy",
    })
  })

  it("should create a valid change theme action", () => {
    const theme: AppTheme = {
      backgroundColor: "",
      textColor: "",
    }

    expect(createChangeThemeAction(theme)).toEqual({
      type: ChangeTheme,
      payload: theme,
    })
  })
})
