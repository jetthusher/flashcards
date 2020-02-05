import { getCounterValue } from "."
import getMockedState from "../../../utils/dev/getMockedState"

describe("Counter selectors", () => {
  it("should select a counter value", () => {
    const state = getMockedState({ counterValue: 4 })
    expect(getCounterValue(state)).toBe(4)
  })
})
