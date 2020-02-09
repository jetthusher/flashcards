import {
  createIncrementAction,
  createDecrementAction,
  createResetAction,
  createSyncStateAction,
} from "../actions"
import configureCounterSagasTester from "../utils/configureCounterSagasTester"

describe("Counter sagas", () => {
  it("should sync state", () => {
    const action = createSyncStateAction()
    const { actual, expected } = configureCounterSagasTester(v => v, {
      action,
      initialValue: 999,
    })

    expect(actual).toBe(expected)
  })

  it("should increment", () => {
    const action = createIncrementAction()
    const { actual, expected } = configureCounterSagasTester(v => v + 1, {
      action,
    })

    expect(actual).toBe(expected)
  })

  it("should decrement", () => {
    const action = createDecrementAction()
    const { actual, expected } = configureCounterSagasTester(v => v - 1, {
      action,
    })

    expect(actual).toBe(expected)
  })

  it("should reset", () => {
    const action = createResetAction()
    const { actual, expected } = configureCounterSagasTester(0, { action })
    expect(actual).toBe(expected)
  })
})
