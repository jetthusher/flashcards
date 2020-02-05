import { CounterAction } from "../types"
import configureStoreTester from "../../../utils/dev/configureStoreTester"
import configureStore from "../../../store/configureStore"
import { getCounterValue } from "../selectors"

export default (
  action: CounterAction,
  expectation: ((state: number) => number) | number,
) =>
  configureStoreTester({
    store: configureStore(),
    selector: getCounterValue,
    action,
    expectation,
  })
