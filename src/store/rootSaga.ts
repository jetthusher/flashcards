import { all, fork } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import * as counterWatchers from "../components/Counter/sagas/watchers"
import objectValuesToArray from "../utils/objectValuesToArray"

const watchersList = [counterWatchers]

export default function* rootSaga(): SagaIterator {
  const forkedWatchers = watchersList
    .map(objectValuesToArray)
    .flat()
    .map(fork)

  yield all(forkedWatchers)
}
