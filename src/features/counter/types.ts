import { ActionType } from "typesafe-actions"
import { DeepReadonly } from "utility-types"

export enum CounterActionTypes {
  SyncState = "@@counter/SYNC_STATE",
  Increment = "@@counter/INCREMENT",
  Decrement = "@@counter/DECREMENT",
  SetValue = "@@counter/SET_VALUE",
  Reset = "@@counter/RESET",
}

export type CounterAction = DeepReadonly<ActionType<typeof import("./actions")>>
