import cardSetListReducer from "./cardSetListReducer"
import {
  createAddCardSetAction,
  createRemoveCardSetAction,
  createEditCardSetAction,
  createAddCardToCardSetAction,
  createRemoveCardFromCardSetAction,
  createEditCardInCardSetAction,
} from "../actions"
import createCardSet from "../components/CardSet/utils/createCardSet"
import createCard from "../components/CardSet/components/Card/utils/createCard"

describe("Card set list reducer", () => {
  it("should add card set", () => {
    const cardSet = createCardSet()
    const reduced = cardSetListReducer([], createAddCardSetAction(cardSet))
    expect(reduced).toContain(cardSet)
  })

  it("should remove card set", () => {
    const cardSet = createCardSet()
    const { id } = cardSet
    const reduced = cardSetListReducer([cardSet], createRemoveCardSetAction(id))
    expect(reduced).not.toContain(cardSet)
  })

  it("should edit card set and not edit id and cards of a set", () => {
    const cardSet = createCardSet()
    const anotherCardSet = createCardSet({ name: "Name #2" })
    const { id, cardList } = cardSet

    const reduced = cardSetListReducer(
      [cardSet, anotherCardSet],
      createEditCardSetAction(id, { name: "Name #1" }),
    )

    expect(reduced[0].name).toBe("Name #1")
    expect(reduced[1].name).toBe("Name #2")
    expect(reduced[0].id).toBe(id)
    expect(reduced[0].cardList).toEqual(cardList)
  })

  it("should add cards to card set", () => {
    const card = createCard()
    const cardSet = createCardSet()
    const { id } = cardSet
    const reduced = cardSetListReducer(
      [cardSet],
      createAddCardToCardSetAction(card, id),
    )
    expect(reduced[0].cardList).toContain(card)
  })

  it("should remove cards from card set", () => {
    const card = createCard()
    const cardId = card.id
    const cardSet = createCardSet({ cardList: [card] })
    const cardSetId = cardSet.id
    const reduced = cardSetListReducer(
      [cardSet],
      createRemoveCardFromCardSetAction(cardId, cardSetId),
    )
    expect(reduced[0].cardList).not.toContain(card)
  })

  it("should edit card in a card set and not change the id", () => {
    const card = createCard()
    const anotherCard = createCard()
    const cardId = card.id
    const cardSet = createCardSet({ cardList: [card, anotherCard] })
    const cardSetId = cardSet.id
    const newCard = { question: "what?", answer: "how?" }

    const reduced = cardSetListReducer(
      [cardSet],
      createEditCardInCardSetAction(cardId, cardSetId, newCard),
    )

    const { cardList } = reduced[0]

    expect(cardList).toContainEqual({ ...card, ...newCard })
    expect(cardList[0].id).toBe(cardId)
    expect(cardList).toContainEqual(anotherCard)
  })

  it("should not change the id", () => {
    const card = createCard()
    const cardId = card.id
    const cardSet = createCardSet({ cardList: [card] })
    const cardSetId = cardSet.id

    const reduced1 = cardSetListReducer([], createAddCardSetAction(cardSet))
    const reduced2 = cardSetListReducer(
      reduced1,
      createAddCardToCardSetAction(card, cardSetId),
    )
    const reduced3 = cardSetListReducer(
      reduced2,
      createRemoveCardFromCardSetAction(cardSetId, cardId),
    )

    expect(reduced3[0].id).toBe(cardSetId)
  })
})
