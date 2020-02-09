import { Action, Store } from "redux"

type AnyButFunction<T> =
  | boolean
  | number
  | string
  | T[]
  | null
  | undefined
  | object

interface Options<S, E, A extends Action> {
  store: Store<S, A>
  action: A
  expectation: ((state: E) => E) | E
  selector: (state: S) => E
}

export default <T, S, E extends AnyButFunction<T>, A extends Action>({
  store,
  selector,
  action,
  expectation,
}: Options<S, E, A>) => {
  const { dispatch, getState } = store
  let expected: E

  if (typeof expectation === "function") {
    expected = expectation(selector(getState()))
  } else {
    expected = expectation
  }

  dispatch(action)
  const actual = selector(getState())
  return { expected, actual }
}
