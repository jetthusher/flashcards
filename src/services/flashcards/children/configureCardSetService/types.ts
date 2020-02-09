import { DeepReadonly } from "utility-types"
import { Id } from "../../../id/types"
import { EditableCard, Card, CardService } from "../configureCardService/types"
import {
  ReadonlyRecord,
  RecordService,
  EditableRecordExclude,
} from "../../../record/types"

export type EditableCardSet = EditableRecordExclude<CardSet, "cardsById">

export type CardsById = Record<Id, Card>
export type CardSet = ReadonlyRecord<{
  name: string
  cardsById: CardsById
}>

export type GetCardById = (cardSet: CardSet, cardId: Id) => Card | undefined

export type FindCard = (
  cardSet: CardSet,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  conditionCallback: (card: Card) => any,
) => Card | undefined

export type GetAllCards = (cardSet: CardSet) => Card[]

export type CreateCardSet = (
  options: EditableCardSet,
  cards: EditableCard[],
) => CardSet

export type AddCard = (cardSet: CardSet, options: EditableCard) => CardSet

export type RemoveCard = (cardSet: CardSet, cardId: Id) => CardSet

export type EditCard = (
  cardSet: CardSet,
  cardId: Id,
  options: EditableCard,
) => CardSet

export type EditCardSet = (
  cardSet: CardSet,
  options: EditableCardSet,
) => CardSet

export type CardSetService = DeepReadonly<{
  getCardById: GetCardById
  findCard: FindCard
  getAllCards: GetAllCards
  createCardSet: CreateCardSet
  editCardSet: EditCardSet
  addCard: AddCard
  removeCard: RemoveCard
  editCard: EditCard
}>

export type CardSetServiceDependencies = DeepReadonly<{
  cardService: CardService
  recordService: RecordService
}>
