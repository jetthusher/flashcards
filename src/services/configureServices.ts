import deepFreeze from "deep-freeze"
import {
  configureFlashcardsServiceCreator,
  configureRecordService,
  configureIdService,
  configureCounterServiceCreator,
} from "./remapping"
import configureCardSetService from "./flashcards/children/configureCardSetService"
import configureCardService from "./flashcards/children/configureCardService"
import { CardSet } from "./flashcards/children/configureCardSetService/types"
import { CounterServiceInitialState } from "./counter/types"

interface InitialStates {
  flashcards?: CardSet[]
  counter?: CounterServiceInitialState
}

interface Options {
  initialState?: InitialStates
}

export default ({ initialState }: Options = {}) => {
  const createCounterService = configureCounterServiceCreator()
  const idCounter = createCounterService()
  const idService = configureIdService({ counterService: idCounter })
  const recordService = configureRecordService({ idService })
  const cardService = configureCardService({ recordService })
  const cardSetService = configureCardSetService({ cardService, recordService })
  const flashcardsService = configureFlashcardsServiceCreator({
    cardSetService,
  })(initialState?.flashcards)

  return deepFreeze({
    counter: createCounterService(initialState?.counter),
    id: idService,
    record: recordService,
    flashcards: flashcardsService,
  })
}
