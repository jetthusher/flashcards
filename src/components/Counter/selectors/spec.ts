import { selectCounterValue } from "."
import getMockState from "../../../utils/dev/getMockState"

describe("Counter selectors", () => {
  it("should select a counter value", () => {
    const state = getMockState({ counterValue: 4 })
    expect(selectCounterValue(state)).toBe(4)
  })
})
