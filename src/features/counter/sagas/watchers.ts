import { takeEvery, takeLatest } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import { CounterActionTypes } from "../types"
import { incrementSaga, decrementSaga, resetSaga, syncStateSaga } from "."

const { SyncState, Increment, Decrement, Reset } = CounterActionTypes

export function* watchLoadSaga(): SagaIterator {
  yield takeLatest(SyncState, syncStateSaga)
}

export function* watchIncrementSaga(): SagaIterator {
  yield takeEvery(Increment, incrementSaga)
}

export function* watchDecrementSaga(): SagaIterator {
  yield takeEvery(Decrement, decrementSaga)
}

export function* watchResetSaga(): SagaIterator {
  yield takeEvery(Reset, resetSaga)
}
