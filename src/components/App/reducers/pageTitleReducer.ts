import { createReducer } from "typesafe-actions"
import { AppAction, AppActionTypes } from "../types"

export default createReducer<string, AppAction>("").handleType(
  AppActionTypes.ChangePageTitle,
  (state, action) => action.payload,
)
