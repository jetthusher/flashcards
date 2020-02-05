import { action } from "typesafe-actions"
import { CardSetListActionTypes } from "../types"
import {
  CardSet,
  CardSetWithOptionalEditableProperties,
} from "../components/CardSet/types"
import { UniqueId } from "../../../utils/getUniqueId/types"
import {
  Card,
  CardWithOptionalEditableProperties,
} from "../components/CardSet/components/Card/types"

const {
  AddCardSet,
  RemoveCardSet,
  EditCardSet,
  AddCardToCardSet,
  RemoveCardFromCardSet,
  EditCardInCardSet,
} = CardSetListActionTypes

export const createAddCardSetAction = (cardSet: CardSet) =>
  action(AddCardSet, cardSet)

export const createRemoveCardSetAction = (cardSetId: UniqueId) =>
  action(RemoveCardSet, cardSetId)

export const createEditCardSetAction = (
  cardSetId: UniqueId,
  cardSet: CardSetWithOptionalEditableProperties,
) => action(EditCardSet, cardSet, { cardSetId })

export const createAddCardToCardSetAction = (card: Card, cardSetId: UniqueId) =>
  action(AddCardToCardSet, card, { cardSetId })

export const createRemoveCardFromCardSetAction = (
  cardId: UniqueId,
  cardSetId: UniqueId,
) => action(RemoveCardFromCardSet, cardId, { cardSetId })

export const createEditCardInCardSetAction = (
  cardId: UniqueId,
  cardSetId: UniqueId,
  card: CardWithOptionalEditableProperties,
) => action(EditCardInCardSet, card, { cardSetId, cardId })
