import { takeEvery } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import { CounterActionTypes } from "../types"
import { incrementSaga, decrementSaga, resetSaga } from "."

const { Increment, Decrement, Reset } = CounterActionTypes

export function* watchIncrementSaga(): SagaIterator {
  yield takeEvery(Increment, incrementSaga)
}

export function* watchDecrementSaga(): SagaIterator {
  yield takeEvery(Decrement, decrementSaga)
}

export function* watchResetSaga(): SagaIterator {
  yield takeEvery(Reset, resetSaga)
}
