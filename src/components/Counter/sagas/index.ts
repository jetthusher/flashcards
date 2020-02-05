import { put, select } from "redux-saga/effects"
import { getCounterValue } from "../selectors"
import { createSetAction } from "../actions"

export function* incrementSaga() {
  const counterValue: number = yield select(getCounterValue)
  yield put(createSetAction(counterValue + 1))
}

export function* decrementSaga() {
  const counterValue: number = yield select(getCounterValue)
  yield put(createSetAction(counterValue - 1))
}

export function* resetSaga() {
  yield put(createSetAction(0))
}
