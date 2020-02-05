import appReducer from "./appReducer"
import { createChangePageTitleAction } from "../actions"

describe("App reducers", () => {
  it("should set a new page title", () => {
    const title = "Make me happy"
    const action = createChangePageTitleAction(title)
    const reduced = appReducer(undefined, action)
    expect(reduced.pageTitle).toBe(title)
  })
})
