import {
  createIncrementAction,
  createDecrementAction,
  createSetAction,
  createResetAction,
} from "."
import { CounterActionTypes } from "../types"

const { Increment, Decrement, Reset, Set } = CounterActionTypes

describe("Counter actions", () => {
  it("should create a valid increment action", () => {
    expect(createIncrementAction()).toEqual({
      type: Increment,
    })
  })

  it("should create a valid decrement action", () => {
    expect(createDecrementAction()).toEqual({
      type: Decrement,
    })
  })

  it("should create a valid set action", () => {
    const number = Math.random()
    expect(createSetAction(number)).toEqual({
      type: Set,
      payload: number,
    })
  })

  it("should create a valid reset action", () => {
    expect(createResetAction()).toEqual({
      type: Reset,
    })
  })
})
