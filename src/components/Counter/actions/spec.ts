import {
  makeIncrementAction,
  makeDecrementAction,
  makeSetAction,
  makeResetAction,
} from "."
import { CounterActionTypes } from "../types"

describe("Counter actions", () => {
  it("should create a valid increment action", () => {
    expect(makeIncrementAction()).toEqual({
      type: CounterActionTypes.Increment,
    })
  })

  it("should create a valid decrement action", () => {
    expect(makeDecrementAction()).toEqual({
      type: CounterActionTypes.Decrement,
    })
  })

  it("should create a valid set action", () => {
    const number = Math.random()
    expect(makeSetAction(number)).toEqual({
      type: CounterActionTypes.Set,
      payload: number,
    })
  })

  it("should create a valid reset action", () => {
    expect(makeResetAction()).toEqual({
      type: CounterActionTypes.Reset,
    })
  })
})
