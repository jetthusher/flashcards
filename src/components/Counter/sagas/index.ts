import { put, select } from "redux-saga/effects"
import { selectCounterValue } from "../selectors"
import { makeSetAction } from "../actions"

export function* increment() {
  const counterValue: number = yield select(selectCounterValue)
  yield put(makeSetAction(counterValue + 1))
}

export function* decrement() {
  const counterValue: number = yield select(selectCounterValue)
  yield put(makeSetAction(counterValue - 1))
}

export function* reset() {
  yield put(makeSetAction(0))
}
