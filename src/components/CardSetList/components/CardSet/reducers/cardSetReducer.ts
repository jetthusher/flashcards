import { createReducer } from "typesafe-actions"
import { CardSet } from "../types"
import { CardSetListAction, CardSetListActionTypes } from "../../../types"
import createCardSet from "../utils/createCardSet"
import cardListReducer from "./cardListReducer"
import editCardSet from "../utils/editCardSet"

const {
  EditCardSet,
  AddCardToCardSet,
  RemoveCardFromCardSet,
  EditCardInCardSet,
} = CardSetListActionTypes

export default createReducer<CardSet, CardSetListAction>(createCardSet())
  .handleType(EditCardSet, (state, action) =>
    editCardSet(state, action.payload),
  )
  .handleType(
    [AddCardToCardSet, RemoveCardFromCardSet, EditCardInCardSet],
    (state, action) => ({
      ...state,
      cardList: cardListReducer(state.cardList, action),
    }),
  )
