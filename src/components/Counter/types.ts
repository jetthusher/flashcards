import { ActionType } from "typesafe-actions"

export enum CounterActionTypes {
  Increment = "@@counter/INCREMENT",
  Decrement = "@@counter/DECREMENT",
  Set = "@@counter/SET",
  Reset = "@@counter/RESET",
}

export type CounterAction = Readonly<ActionType<typeof import("./actions")>>
