import { getCard, getCardQuestion, getCardAnswer } from "."
import getMockedState from "../../../../../../../utils/dev/getMockedState"
import createCardSet from "../../../utils/createCardSet"
import createCard from "../utils/createCard"
import getUniqueId from "../../../../../../../utils/getUniqueId"

const card1 = createCard({ question: "What?", answer: "Why?" })
const card2 = createCard({ question: "Where?", answer: "When?" })
const cardSet1 = createCardSet({ cardList: [card1] })
const cardSet2 = createCardSet({ cardList: [card2] })
const cardSet3 = createCardSet({ cardList: [] })
const state = getMockedState({ cardSetList: [cardSet1, cardSet2] })
const stateWithEmptyCardSet = getMockedState({ cardSetList: [cardSet3] })
const cardSet1Id = cardSet1.id
const cardSet2Id = cardSet2.id
const card1Id = card1.id
const card2Id = card2.id

describe("Card selectors", () => {
  it("should get card", () => {
    const selectedCard1 = getCard(state, {
      cardId: card1Id,
      cardSetId: cardSet1Id,
    })

    const selectedCard2 = getCard(state, {
      cardId: card2Id,
      cardSetId: cardSet2Id,
    })

    const selectedCard3 = getCard(stateWithEmptyCardSet, {
      cardId: getUniqueId(),
      cardSetId: getUniqueId(),
    })

    expect(selectedCard1).toEqual(card1)
    expect(selectedCard2).toEqual(card2)
    expect(selectedCard3).toBeUndefined()
  })

  it("should get card question", () => {
    const selectedCardQuestion1 = getCardQuestion(state, {
      cardId: card1Id,
      cardSetId: cardSet1Id,
    })

    const selectedCardQuestion2 = getCardQuestion(state, {
      cardId: card2Id,
      cardSetId: cardSet2Id,
    })

    const selectedCardQuestion3 = getCardQuestion(stateWithEmptyCardSet, {
      cardId: getUniqueId(),
      cardSetId: getUniqueId(),
    })

    expect(selectedCardQuestion1).toBe(card1.question)
    expect(selectedCardQuestion2).toBe(card2.question)
    expect(selectedCardQuestion3).toBeUndefined()
  })

  it("should get card answer", () => {
    const selectedCardAnswer1 = getCardAnswer(state, {
      cardId: card1Id,
      cardSetId: cardSet1Id,
    })

    const selectedCardAnswer2 = getCardAnswer(state, {
      cardId: card2Id,
      cardSetId: cardSet2Id,
    })

    const selectedCardAnswer3 = getCardAnswer(stateWithEmptyCardSet, {
      cardId: getUniqueId(),
      cardSetId: getUniqueId(),
    })

    expect(selectedCardAnswer1).toBe(card1.answer)
    expect(selectedCardAnswer2).toBe(card2.answer)
    expect(selectedCardAnswer3).toBeUndefined()
  })
})
