import { all, fork } from "redux-saga/effects"
import { SagaIterator } from "redux-saga"
import * as counterWatchers from "../features/counter/sagas/watchers"
import objectToArrayOfValues from "../utils/objectToArrayOfValues"

const watchersList = [counterWatchers]

export default function* rootSaga(): SagaIterator {
  const forkedWatchers = watchersList
    .map(objectToArrayOfValues)
    .flat()
    .map(fork)

  yield all(forkedWatchers)
}
