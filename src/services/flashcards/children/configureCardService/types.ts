import { DeepReadonly } from "utility-types"
import {
  ReadonlyRecord,
  EditableRecord,
  RecordService,
} from "../../../record/types"

export type EditableCard = EditableRecord<Card>
export type Card = ReadonlyRecord<{
  question: string
  answer: string
}>

export type CreateCard = (options: EditableCard) => Card
export type EditCard = (card: Card, options: EditableCard) => Card

export type CardService = DeepReadonly<{
  createCard: CreateCard
  editCard: EditCard
}>

export type CardServiceDependencies = DeepReadonly<{
  recordService: RecordService
}>
