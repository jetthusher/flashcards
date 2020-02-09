import configureCardService from "."
import isDeepFrozen from "../../../../utils/isDeepFrozen"
import {
  configureRecordService,
  configureIdService,
  configureCounterServiceCreator,
} from "../../../remapping"

describe("Card service", () => {
  it("should be immutable", () => {
    const counterService = configureCounterServiceCreator()()
    const idService = configureIdService({ counterService })
    const recordService = configureRecordService({ idService })
    const service = configureCardService({ recordService })
    expect(isDeepFrozen(service)).toBeTruthy()
  })
})
