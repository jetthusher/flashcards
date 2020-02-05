import { createReducer } from "typesafe-actions"
import { CardSetListActionTypes, CardSetListAction } from "../../../types"
import { CardList } from "../types"
import editCardList from "../utils/editCardList"

const {
  AddCardToCardSet,
  RemoveCardFromCardSet,
  EditCardInCardSet,
} = CardSetListActionTypes

export default createReducer<CardList, CardSetListAction>([])
  .handleType(AddCardToCardSet, (state, action) =>
    editCardList(state).addCard(action.payload),
  )
  .handleType(RemoveCardFromCardSet, (state, action) =>
    editCardList(state).removeCard(action.payload),
  )
  .handleType(EditCardInCardSet, (state, action) =>
    editCardList(state).editCard(action.meta.cardId, action.payload),
  )
