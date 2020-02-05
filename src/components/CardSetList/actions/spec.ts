import {
  createAddCardSetAction,
  createRemoveCardSetAction,
  createEditCardSetAction,
  createAddCardToCardSetAction,
  createRemoveCardFromCardSetAction,
  createEditCardInCardSetAction,
} from "."
import { CardSetListActionTypes } from "../types"
import getUniqueId from "../../../utils/getUniqueId"
import createCard from "../components/CardSet/components/Card/utils/createCard"
import createCardSet from "../components/CardSet/utils/createCardSet"

const {
  AddCardSet,
  RemoveCardSet,
  EditCardSet,
  AddCardToCardSet,
  RemoveCardFromCardSet,
  EditCardInCardSet,
} = CardSetListActionTypes

describe("Card set list actions", () => {
  it("should create a valid add card set action", () => {
    const cardSet = createCardSet()
    expect(createAddCardSetAction(cardSet)).toEqual({
      type: AddCardSet,
      payload: cardSet,
    })
  })

  it("should create a valid remove card set action", () => {
    const id = getUniqueId()
    expect(createRemoveCardSetAction(id)).toEqual({
      type: RemoveCardSet,
      payload: id,
    })
  })

  it("should create a valid edit card set action", () => {
    const cardSetId = getUniqueId()
    const name = "Helloooo"
    expect(createEditCardSetAction(cardSetId, { name })).toEqual({
      type: EditCardSet,
      payload: { name },
      meta: { cardSetId },
    })
  })

  it("should create a valid add card action", () => {
    const cardSetId = getUniqueId()
    const card = createCard()
    expect(createAddCardToCardSetAction(card, cardSetId)).toEqual({
      type: AddCardToCardSet,
      payload: card,
      meta: { cardSetId },
    })
  })

  it("should create a valid remove card action", () => {
    const cardSetId = getUniqueId()
    const cardId = getUniqueId()
    expect(createRemoveCardFromCardSetAction(cardId, cardSetId)).toEqual({
      type: RemoveCardFromCardSet,
      payload: cardId,
      meta: { cardSetId },
    })
  })

  it("should create a valid edit card action", () => {
    const cardSetId = getUniqueId()
    const cardId = getUniqueId()
    const card = { question: "What", answer: "Yes" }
    expect(createEditCardInCardSetAction(cardId, cardSetId, card)).toEqual({
      type: EditCardInCardSet,
      payload: card,
      meta: { cardSetId, cardId },
    })
  })
})
