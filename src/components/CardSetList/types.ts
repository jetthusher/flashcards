import { ActionType } from "typesafe-actions"
import { DeepReadonly } from "utility-types"
import { CardSet } from "./components/CardSet/types"

export enum CardSetListActionTypes {
  AddCardSet = "@@cardSetList/ADD_CARD_SET",
  RemoveCardSet = "@@cardSetList/REMOVE_CARD_SET",
  EditCardSet = "@@cardSetList/EDIT_CARD_SET",
  AddCardToCardSet = "@@cardSetList/ADD_CARD_TO_CARD_SET",
  RemoveCardFromCardSet = "@@cardSetList/REMOVE_CARD_FROM_CARD_SET",
  EditCardInCardSet = "@@cardSetList/EDIT_CARD_IN_CARD_SET",
}

export type CardSetList = DeepReadonly<CardSet[]>
export type CardSetListAction = DeepReadonly<
  ActionType<typeof import("./actions")>
>
