import {
  makeIncrementAction,
  makeDecrementAction,
  makeResetAction,
} from "../actions"
import configureStore from "../../../store/configureStore"
import { selectCounterValue } from "../selectors"
import testStore from "../../../utils/dev/testStore"
import { CounterAction } from "../types"

const testCounter = (
  actionCreator: () => CounterAction,
  expectation: ((state: number) => number) | number,
) =>
  testStore({
    store: configureStore(),
    selector: selectCounterValue,
    action: actionCreator(),
    expectation,
  })

describe("Counter sagas", () => {
  it("should increment", () => {
    const { actual, expected } = testCounter(makeIncrementAction, v => v + 1)
    expect(actual).toBe(expected)
  })

  it("should decrement", () => {
    const { actual, expected } = testCounter(makeDecrementAction, v => v - 1)
    expect(actual).toBe(expected)
  })

  it("should reset", () => {
    const { actual, expected } = testCounter(makeResetAction, 0)
    expect(actual).toBe(expected)
  })
})
