import { CounterAction } from "../types"
import configureStoreTester from "../../../store/configureStoreTester"
import configureStore from "../../../store/configureStore"
import { getCounter } from "../selectors"
import configureServices from "../../../services/configureServices"

interface Options {
  action: CounterAction
  initialValue?: number
}

export default (
  expectation: ((state: number) => number) | number,
  { action, initialValue = 0 }: Options,
) =>
  configureStoreTester({
    store: configureStore({
      preloadedState: { counter: initialValue },
      services: configureServices(),
    }),
    selector: getCounter,
    action,
    expectation,
  })
