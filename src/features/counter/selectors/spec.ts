import { getCounter } from "."
import getMockedState from "../../../store/getMockedState"

describe("Counter selectors", () => {
  it("should select a counter value", () => {
    const state = getMockedState({ counterValue: 4 })
    expect(getCounter(state)).toBe(4)
  })
})
