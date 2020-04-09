import deepFreeze from "deep-freeze"
import {
  CardService,
  Card,
  CreateCard,
  EditCard,
  CardServiceDependencies,
} from "./types"

export default (dependencies: CardServiceDependencies): CardService => {
  const createCard: CreateCard = ({ question = "", answer = "" }) =>
    dependencies.recordService.createRecord<Card>({ question, answer })

  const editCard: EditCard = (card, options) =>
    dependencies.recordService.editRecord(card, options)

  return deepFreeze({
    createCard,
    editCard,
  })
}
