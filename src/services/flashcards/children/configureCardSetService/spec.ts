import configureCardSetService from "."
import configureCardService from "../configureCardService"
import {
  configureRecordService,
  configureIdService,
  configureCounterServiceCreator,
} from "../../../remapping"
import isDeepFrozen from "../../../../utils/isDeepFrozen"

describe("Card set service", () => {
  it("should be immutable", () => {
    const counterService = configureCounterServiceCreator()()
    const idService = configureIdService({ counterService })
    const recordService = configureRecordService({ idService })
    const cardService = configureCardService({ recordService })
    const service = configureCardSetService({ cardService, recordService })
    expect(isDeepFrozen(service)).toBeTruthy()
  })
})
