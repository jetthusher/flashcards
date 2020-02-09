import { createReducer } from "typesafe-actions"
import { CounterActionTypes } from "../types"

export default createReducer(0).handleType(
  CounterActionTypes.SetValue,
  (state, action) => action.payload,
)
