import { createReducer } from "typesafe-actions"
import { AppActionTypes } from "../types"

export default createReducer("").handleType(
  AppActionTypes.ChangePageTitle,
  (state, action) => action.payload,
)
