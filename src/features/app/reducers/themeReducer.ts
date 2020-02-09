import { createReducer } from "typesafe-actions"
import darkTheme from "../themes/dark"
import { AppActionTypes } from "../types"

export default createReducer(darkTheme).handleType(
  AppActionTypes.ChangeTheme,
  (state, action) => action.payload,
)
