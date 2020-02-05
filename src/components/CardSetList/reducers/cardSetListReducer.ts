import { createReducer } from "typesafe-actions"
import {
  CardSetListAction,
  CardSetListActionTypes,
  CardSetList,
} from "../types"
import cardSetReducer from "../components/CardSet/reducers/cardSetReducer"

const {
  AddCardSet,
  RemoveCardSet,
  EditCardSet,
  AddCardToCardSet,
  RemoveCardFromCardSet,
  EditCardInCardSet,
} = CardSetListActionTypes

export default createReducer<CardSetList, CardSetListAction>([])
  .handleType(AddCardSet, (state, action) => [...state, action.payload])
  .handleType(RemoveCardSet, (state, action) =>
    state.filter(cardSet => cardSet.id !== action.payload),
  )
  .handleType(
    [EditCardSet, AddCardToCardSet, RemoveCardFromCardSet, EditCardInCardSet],
    (state, action) =>
      state.map(cardSet => {
        if (action.meta.cardSetId === cardSet.id) {
          return cardSetReducer(cardSet, action)
        }

        return cardSet
      }),
  )
