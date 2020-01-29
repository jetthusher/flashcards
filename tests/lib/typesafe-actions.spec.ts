import { createReducer } from "typesafe-actions"

describe("typesafe-actions", () => {
  describe(createReducer.name, () => {
    it("should ignore unknown actions", () => {
      const testReducer = createReducer(0).handleAction("yes", () => 10)
      expect(testReducer(undefined, { type: "no" })).toBe(0)
    })

    it("should fallback state if an argument is not specified", () => {
      const testReducer = createReducer(420)
      expect(testReducer(undefined, { type: "no" })).toBe(420)
    })
  })
})
