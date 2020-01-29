import { makeChangePageTitleAction } from "."
import { AppActionTypes } from "../types"

describe("App actions", () => {
  it("should create a valid change title action", () => {
    expect(makeChangePageTitleAction("Make me happy")).toEqual({
      type: AppActionTypes.ChangePageTitle,
      payload: "Make me happy",
    })
  })
})
