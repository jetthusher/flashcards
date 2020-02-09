import deepFreeze from "deep-freeze"
import {
  CardSetService,
  AddCard,
  RemoveCard,
  EditCard,
  GetCardById,
  CardSet,
  CardSetServiceDependencies,
  CreateCardSet,
  EditCardSet,
  GetAllCards,
  CardsById,
  FindCard,
} from "./types"
import objectToArrayOfValues from "../../../../utils/objectToArrayOfValues"

export default ({
  cardService,
  recordService,
}: CardSetServiceDependencies): CardSetService => {
  const getCardById: GetCardById = (cardSet, cardId) =>
    cardSet.cardsById[cardId]

  const findCard: FindCard = ({ cardsById }, conditionCallback) =>
    objectToArrayOfValues(cardsById).find(conditionCallback)

  const getAllCards: GetAllCards = ({ cardsById }) =>
    objectToArrayOfValues(cardsById)

  const createCardSet: CreateCardSet = ({ name = "" }, cards) => {
    const cardsById: CardsById = {}
    cards.forEach(options => {
      const cardRecord = cardService.createCard(options)
      cardsById[cardRecord.id] = cardRecord
    })

    return recordService.createRecord<CardSet>({ name, cardsById })
  }

  const editCardSet: EditCardSet = (cardSet, options) =>
    recordService.editRecord(cardSet, options)

  const addCard: AddCard = (cardSet, options) => {
    const cardRecord = cardService.createCard(options)
    const cardsById = { ...cardSet.cardsById, [cardRecord.id]: cardRecord }
    return recordService.editRecord(cardSet, { cardsById })
  }

  const removeCard: RemoveCard = (cardSet, cardId) => {
    const cardsById = { ...cardSet.cardsById }
    delete cardsById[cardId]
    return recordService.editRecord(cardSet, { cardsById })
  }

  const editCard: EditCard = (cardSet, cardId, options) => {
    const card = cardSet.cardsById[cardId]
    const updatedCard = cardService.editCard(card, options)
    const cardsById = { ...cardSet.cardsById, [cardId]: updatedCard }
    return recordService.editRecord(cardSet, { cardsById })
  }

  return deepFreeze({
    getCardById,
    findCard,
    getAllCards,
    createCardSet,
    editCardSet,
    addCard,
    removeCard,
    editCard,
  })
}
