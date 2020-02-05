import { ActionType } from "typesafe-actions"
import { DeepReadonly } from "utility-types"

export enum CounterActionTypes {
  Increment = "@@counter/INCREMENT",
  Decrement = "@@counter/DECREMENT",
  Set = "@@counter/SET",
  Reset = "@@counter/RESET",
}

export type CounterAction = DeepReadonly<ActionType<typeof import("./actions")>>
