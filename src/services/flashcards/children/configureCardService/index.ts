import deepFreeze from "deep-freeze"
import {
  CardService,
  Card,
  CreateCard,
  EditCard,
  CardServiceDependencies,
} from "./types"

export default ({ recordService }: CardServiceDependencies): CardService => {
  const createCard: CreateCard = ({ question = "", answer = "" }) =>
    recordService.createRecord<Card>({ question, answer })

  const editCard: EditCard = (card, options) =>
    recordService.editRecord(card, options)

  return deepFreeze({
    createCard,
    editCard,
  })
}
