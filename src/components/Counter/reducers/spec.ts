import counterReducer from "./counterReducer"
import { makeSetAction } from "../actions"

describe("Counter reducers", () => {
  it("should set value", () => {
    const number = Math.random()
    const reduced = counterReducer(undefined, makeSetAction(number))
    expect(reduced.value).toEqual(number)
  })
})
