import { selectCounterValue } from "."
import getMockedState from "../../../utils/dev/getMockedState"

describe("Counter selectors", () => {
  it("should select a counter value", () => {
    const state = getMockedState({ counterValue: 4 })
    expect(selectCounterValue(state)).toBe(4)
  })
})
