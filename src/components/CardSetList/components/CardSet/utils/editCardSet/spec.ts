import editCardSet from "."
import createCardSet from "../createCardSet"

describe("Edit card set", () => {
  it("should edit card set without touching id and card list", () => {
    const name = "Weo"
    const cardSet = createCardSet()
    const editedCardSet = editCardSet(cardSet, { name })
    expect(editedCardSet).toEqual({
      id: cardSet.id,
      cardList: cardSet.cardList,
      name,
    })
  })
})
