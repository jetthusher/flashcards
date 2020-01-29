import { createReducer } from "typesafe-actions"
import { CounterAction, CounterActionTypes } from "../types"

export default createReducer<number, CounterAction>(0).handleType(
  CounterActionTypes.Set,
  (state, action) => action.payload,
)
