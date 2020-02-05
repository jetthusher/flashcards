import editCardList from "."
import createCard from "../../components/Card/utils/createCard"
import { CardList } from "../../types"
import createCardSet from "../createCardSet"

describe("Edit card list", () => {
  it("should add a card", () => {
    const card = createCard()
    const newCardList = editCardList([]).addCard(card)
    expect(newCardList).toContainEqual(card)
  })

  it("should remove card", () => {
    const card = createCard()
    const cardId = card.id
    const cardList: CardList = [card]
    const newCardList = editCardList(cardList).removeCard(cardId)
    expect(newCardList).not.toContainEqual(card)
  })

  it("should edit card", () => {
    const card = createCard()
    const cardId = card.id
    const cardList: CardList = [card]
    const question = "AAAAA"
    const answer = "OOOOOO"
    const newCard = { question, answer }
    const newCardList = editCardList(cardList).editCard(cardId, newCard)
    expect(newCardList.length).toBe(cardList.length)
    expect(newCardList).not.toContainEqual(card)
    expect(newCardList).toContainEqual({ id: cardId, ...newCard })
  })

  it("should not mutate the passed card list", () => {
    const { cardList } = createCardSet()
    const card = createCard()
    const { id } = card
    const question = "Who's there?"
    const addedToList = editCardList(cardList).addCard(card)
    const editedInList = editCardList(addedToList).editCard(id, { question })
    const removedFromList = editCardList(editedInList).removeCard(id)

    expect(addedToList).not.toBe(cardList)
    expect(editedInList).not.toBe(cardList)
    expect(removedFromList).not.toBe(cardList)
  })
})
