import { FlashcardsService } from "./types"
import isDeepFrozen from "../../utils/isDeepFrozen"
import objectToArrayOfValues from "../../utils/objectToArrayOfValues"
import { CardSet } from "./children/configureCardSetService/types"
import {
  cardSet1,
  cardSet2,
  card1,
  card2,
  card3,
  cardRecord1,
  cardRecord4,
  cardRecord5,
  cardRecord2,
  cardRecord3,
} from "./fixtures"
import configureServices from "../configureServices"

describe("Flashcards service", () => {
  let flashcards: FlashcardsService
  let flashcardsWithFixtures: FlashcardsService
  beforeEach(() => {
    flashcards = configureServices().flashcards
    flashcardsWithFixtures = configureServices({
      flashcards: [cardSet1, cardSet2],
    }).flashcards
  })

  it("should be immutable", () => {
    expect(isDeepFrozen(flashcards)).toBeTruthy()
  })

  it("should get a card set by id", () => {
    const found = flashcardsWithFixtures.getCardSetById(cardSet1.id)
    expect(found).toEqual(cardSet1)
  })

  it("should return undefined if no card set has been found by id", () => {
    const found = flashcards.getCardSetById("nonono")
    expect(found).toBeUndefined()
  })

  it("should find a card set", () => {
    const found = flashcardsWithFixtures.findCardSet(
      ({ id }) => id === cardSet1.id,
    )

    expect(found).toEqual(cardSet1)
  })

  it("should return undefined if no card set has by found", () => {
    const found = flashcardsWithFixtures.findCardSet(
      ({ id }) => id === "notreal",
    )

    expect(found).toBeUndefined()
  })

  it("should get all card sets", () => {
    const allCardSets = flashcardsWithFixtures.getAllCardSets()
    expect(allCardSets).toEqual([cardSet1, cardSet2])
  })

  it("should get card in card set by id", () => {
    const cardId = cardRecord1.id
    const cardSetId = cardSet1.id
    const found = flashcardsWithFixtures.getCardInCardSetById(cardId, cardSetId)

    expect(found).toEqual(cardRecord1)
  })

  it("should return undefined if no card has by found in card set by id", () => {
    const found = flashcards.getCardInCardSetById("null", "null")
    expect(found).toBeUndefined()
  })

  it("should find card in card set", () => {
    const found = flashcardsWithFixtures.findCardInCardSet(
      card => card.id === cardRecord5.id,
      cardSet2.id,
    )

    expect(found).toEqual(cardRecord5)
  })

  it("should return undefined if no card has by found in card set", () => {
    const found = flashcards.findCardInCardSet(
      card => card.id === cardRecord4.id,
      cardSet1.id,
    )

    expect(found).toBeUndefined()
  })

  it("should get all cards in card set", () => {
    const allCards1 = flashcardsWithFixtures.getAllCardsInCardSet(cardSet1.id)

    const allCards2 = flashcardsWithFixtures.getAllCardsInCardSet(cardSet2.id)

    expect(allCards1).toHaveLength(3)
    expect(allCards2).toHaveLength(2)
  })

  it("should return undefined if card set has not been found (get all cards)", () => {
    const cards = flashcardsWithFixtures.getAllCardsInCardSet("nonono")
    expect(cards).toBeUndefined()
  })

  it("should get all cards", () => {
    const cards = flashcardsWithFixtures.getAllCards()
    expect(cards).toEqual([
      cardRecord1,
      cardRecord2,
      cardRecord3,
      cardRecord4,
      cardRecord5,
    ])
  })

  it("should return empty array if there are no cards yet", () => {
    const cards = flashcards.getAllCards()
    expect(cards).toHaveLength(0)
  })

  it("should add card set", () => {
    const cards = [card1, card2, card3]
    const id1 = flashcards.addCardSet({ name: "fatherfather" }, cards)
    const id2 = flashcards.addCardSet({})
    const cardSetRecord1 = flashcards.getCardSetById(id1) as CardSet
    const cardSetRecord2 = flashcards.getCardSetById(id2) as CardSet

    const cardsAsArray = objectToArrayOfValues(cardSetRecord1.cardsById)

    expect(cardSetRecord1.name).toBe("fatherfather")
    expect(cardSetRecord2.name).toBe("")
    expect(cardSetRecord1.id).toStrictEqual(expect.any(String))
    expect(cardSetRecord2.id).toStrictEqual(expect.any(String))
    expect(cardsAsArray).toEqual(
      cards.map(card => ({ ...card, id: expect.any(String) })),
    )
  })

  it("should remove card set", () => {
    flashcardsWithFixtures.removeCardSet("test1")
    const cardSetRecord1 = flashcardsWithFixtures.getCardSetById("test1")
    const cardSetRecord2 = flashcardsWithFixtures.getCardSetById("test2")

    expect(cardSetRecord1).toBeUndefined()
    expect(cardSetRecord2).not.toBeUndefined()
  })

  it("should edit card set", () => {
    flashcardsWithFixtures.editCardSet("test2", { name: "t-2" })
    const name = flashcardsWithFixtures.getCardSetById("test2")?.name
    expect(name).toBe("t-2")
  })

  it("should not throw if there is no card set to edit", () => {
    flashcards.editCardSet("there is none", {})
  })

  it("should add card to card set", () => {
    const id = flashcardsWithFixtures.addCardToCardSet(card1, "test1")
    const cardRecord = flashcardsWithFixtures.getCardInCardSetById(
      id as string,
      "test1",
    )

    expect(id).toStrictEqual(expect.any(String))
    expect(cardRecord).toMatchObject(card1)
  })

  it("should be able to add empty cards", () => {
    const cardSetId = flashcards.addCardSet({})
    const cardId = flashcards.addCardToCardSet({}, cardSetId)
    const cardRecord = flashcards.getCardInCardSetById(
      cardId as string,
      cardSetId,
    )

    expect(cardRecord).not.toBeUndefined()
  })

  it("should return undefined if could not add card to card set", () => {
    const id = flashcards.addCardToCardSet({}, "")
    expect(id).toBeUndefined()
  })

  it("should remove card from card set", () => {
    flashcardsWithFixtures.removeCardFromCardSet("5", "test2")
    const card = flashcardsWithFixtures.getCardInCardSetById("5", "test2")

    expect(card).toBeUndefined()
  })

  it("should not throw if there is no card set to remove from", () => {
    flashcards.removeCardFromCardSet("no", "nonono")
  })

  it("should edit card in card set", () => {
    const card = { question: "What's", answer: "How's" }
    flashcardsWithFixtures.editCardInCardSet("5", "test2", card)
    const cardRecord = flashcardsWithFixtures.getCardInCardSetById("5", "test2")

    expect(cardRecord).toMatchObject(card)
  })

  it("should not throw if there is no card set to edit card in", () => {
    flashcards.editCardInCardSet("nonono", "null", {})
  })
})
