import { getCardSetList } from "."
import getMockedState from "../../../utils/dev/getMockedState"
import createCardSet from "../components/CardSet/utils/createCardSet"

describe("Card set list selectors", () => {
  it("should select card set list", () => {
    const cardSetList = [createCardSet(), createCardSet(), createCardSet()]
    const state = getMockedState({ cardSetList })
    expect(getCardSetList(state)).toEqual(cardSetList)
  })
})
