import deepFreeze from "deep-freeze"
import {
  CardSetsServiceDependencies,
  FlashcardsService,
  CreateCardSet,
  RemoveCardSet,
  EditCardSet,
  AddCardToCardSet,
  RemoveCardFromCardSet,
  GetCardSetById,
  GetAllCardSets,
  FindCardSet,
  EditCardInCardSet,
  GetCardInCardSetById,
  FindCardInCardSet,
  GetAllCardsInCardSet,
  GetAllCards,
  ImportCardSets,
} from "./types"
import { CardSet } from "./children/configureCardSetService/types"
import objectToArrayOfValues from "../../utils/objectToArrayOfValues"
import getArrayDifference from "../../utils/getArrayDifference"
import { Id } from "../id/types"

export default (dependencies: CardSetsServiceDependencies) => (
  initialState: CardSet[] = [],
): FlashcardsService => {
  const cardSetsDictionary: Record<Id, CardSet> = {}

  const storeCardSet = (cardSet: CardSet) => {
    cardSetsDictionary[cardSet.id] = cardSet
  }

  const getCardSetById: GetCardSetById = cardSetId =>
    cardSetsDictionary[cardSetId]

  const findCardSet: FindCardSet = conditionCallback =>
    objectToArrayOfValues(cardSetsDictionary).find(conditionCallback)

  const getAllCardSets: GetAllCardSets = () =>
    objectToArrayOfValues(cardSetsDictionary)

  const getCardInCardSetById: GetCardInCardSetById = (cardId, cardSetId) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      return dependencies.cardSetService.getCardById(cardSet, cardId)
    }
  }

  const findCardInCardSet: FindCardInCardSet = (
    conditionCallback,
    cardSetId,
  ) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      return dependencies.cardSetService.findCard(cardSet, conditionCallback)
    }
  }

  const getAllCardsInCardSet: GetAllCardsInCardSet = cardSetId => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      return dependencies.cardSetService.getAllCards(cardSet)
    }
  }

  const getAllCards: GetAllCards = () =>
    objectToArrayOfValues(cardSetsDictionary)
      .map(cardSet => cardSet.cardsById)
      .map(objectToArrayOfValues)
      .flat()

  const createCardSet: CreateCardSet = (options, cards = []) => {
    const cardSet = dependencies.cardSetService.createCardSet(options, cards)
    const { id } = cardSet
    storeCardSet(cardSet)
    return id
  }

  const removeCardSet: RemoveCardSet = cardSetId => {
    delete cardSetsDictionary[cardSetId]
  }

  const editCardSet: EditCardSet = (cardSetId, options) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      const updated = dependencies.cardSetService.editCardSet(cardSet, options)
      storeCardSet(updated)
    }
  }

  const addCardToCardSet: AddCardToCardSet = (card, cardSetId) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      const updated = dependencies.cardSetService.addCard(cardSet, card)
      storeCardSet(updated)

      const idsBefore = Object.keys(cardSet.cardsById)
      const idsAfter = Object.keys(updated.cardsById)

      // Diff ids and return the new one
      return getArrayDifference(idsBefore, idsAfter)[0]
    }
  }

  const removeCardFromCardSet: RemoveCardFromCardSet = (cardId, cardSetId) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      const updated = dependencies.cardSetService.removeCard(cardSet, cardId)
      storeCardSet(updated)
    }
  }

  const editCardInCardSet: EditCardInCardSet = (cardId, cardSetId, options) => {
    const cardSet = getCardSetById(cardSetId)

    if (cardSet) {
      const updated = dependencies.cardSetService.editCard(
        cardSet,
        cardId,
        options,
      )
      storeCardSet(updated)
    }
  }

  const importCardSets: ImportCardSets = cardSetsForImport => {
    cardSetsForImport.forEach(storeCardSet)
  }

  importCardSets(initialState)

  return deepFreeze({
    getCardSetById,
    findCardSet,
    getAllCardSets,
    getCardInCardSetById,
    findCardInCardSet,
    getAllCardsInCardSet,
    getAllCards,
    createCardSet,
    removeCardSet,
    editCardSet,
    addCardToCardSet,
    removeCardFromCardSet,
    editCardInCardSet,
    importCardSets,
  })
}
