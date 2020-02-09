import { put, select } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import { createSetAction } from "../actions"
import { Services } from "../../../services/types"
import getServicesFromContext from "../../../store/getServicesFromContext"
import { getCounter } from "../selectors"

export function* syncStateSaga(): SagaIterator {
  const state: number = yield select(getCounter)
  const services: Services = yield getServicesFromContext()
  const value = services.counter.setValue(state)
  const setAction = createSetAction(value)
  yield put(setAction)
}

export function* incrementSaga(): SagaIterator {
  const services: Services = yield getServicesFromContext()
  const value = services.counter.increment()
  const setAction = createSetAction(value)
  yield put(setAction)
}

export function* decrementSaga(): SagaIterator {
  const services: Services = yield getServicesFromContext()
  const value = services.counter.decrement()
  const setAction = createSetAction(value)
  yield put(setAction)
}

export function* resetSaga(): SagaIterator {
  const services: Services = yield getServicesFromContext()
  const value = services.counter.reset()
  const setAction = createSetAction(value)
  yield put(setAction)
}
