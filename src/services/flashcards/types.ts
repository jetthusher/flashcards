import { DeepReadonly } from "utility-types"
import { Id } from "../id/types"
import { EditableCard, Card } from "./children/configureCardService/types"
import {
  CardSet,
  CardSetService,
  EditableCardSet,
} from "./children/configureCardSetService/types"

export type CreateCardSet = (
  options: EditableCardSet,
  cards?: EditableCard[],
) => Id

export type GetCardSetById = (cardSetId: Id) => CardSet | undefined

export type FindCardSet = (
  conditionCallback: (cardSet: CardSet) => boolean,
) => CardSet | undefined

export type GetAllCardSets = () => CardSet[]

export type GetCardInCardSetById = (
  cardId: Id,
  cardSetId: Id,
) => Card | undefined

export type FindCardInCardSet = (
  conditionCallback: (card: Card) => boolean,
  cardSetId: Id,
) => Card | undefined

export type GetAllCardsInCardSet = (cardSetId: Id) => Card[] | undefined

export type GetAllCards = () => Card[]

export type RemoveCardSet = (cardSetId: Id) => void

export type EditCardSet = (cardSetId: Id, options: EditableCardSet) => void

export type AddCardToCardSet = (
  card: EditableCard,
  cardSetId: Id,
) => Id | undefined

export type RemoveCardFromCardSet = (cardId: Id, cardSetId: Id) => void

export type EditCardInCardSet = (
  cardId: Id,
  cardSetId: Id,
  options: EditableCard,
) => void

export type ImportCardSets = (cardSets: CardSet[]) => void

export type FlashcardsService = DeepReadonly<{
  getCardSetById: GetCardSetById
  findCardSet: FindCardSet
  getAllCardSets: GetAllCardSets
  getCardInCardSetById: GetCardInCardSetById
  findCardInCardSet: FindCardInCardSet
  getAllCardsInCardSet: GetAllCardsInCardSet
  getAllCards: GetAllCards
  createCardSet: CreateCardSet
  removeCardSet: RemoveCardSet
  editCardSet: EditCardSet
  addCardToCardSet: AddCardToCardSet
  removeCardFromCardSet: RemoveCardFromCardSet
  editCardInCardSet: EditCardInCardSet
  importCardSets: ImportCardSets
}>

export type CardSetsServiceDependencies = DeepReadonly<{
  cardSetService: CardSetService
}>
