import {
  createIncrementAction,
  createDecrementAction,
  createResetAction,
} from "../actions"
import configureCounterSagasTester from "../utils/configureCounterSagasTester"

describe("Counter sagas", () => {
  it("should increment", () => {
    const action = createIncrementAction()
    const { actual, expected } = configureCounterSagasTester(action, v => v + 1)
    expect(actual).toBe(expected)
  })

  it("should decrement", () => {
    const action = createDecrementAction()
    const { actual, expected } = configureCounterSagasTester(action, v => v - 1)
    expect(actual).toBe(expected)
  })

  it("should reset", () => {
    const action = createResetAction()
    const { actual, expected } = configureCounterSagasTester(action, 0)
    expect(actual).toBe(expected)
  })
})
