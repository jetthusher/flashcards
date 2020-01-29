import { takeEvery } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import { CounterActionTypes } from "../types"
import { increment, decrement, reset } from "."

export function* watchIncrement(): SagaIterator {
  yield takeEvery(CounterActionTypes.Increment, increment)
}

export function* watchDecrement(): SagaIterator {
  yield takeEvery(CounterActionTypes.Decrement, decrement)
}

export function* watchReset(): SagaIterator {
  yield takeEvery(CounterActionTypes.Reset, reset)
}
