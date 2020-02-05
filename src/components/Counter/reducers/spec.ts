import counterReducer from "./counterReducer"
import { createSetAction } from "../actions"

describe("Counter reducers", () => {
  it("should set value", () => {
    const number = Math.random()
    const reduced = counterReducer(undefined, createSetAction(number))
    expect(reduced.value).toEqual(number)
  })
})
