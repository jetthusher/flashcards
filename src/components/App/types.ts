import { ActionType } from "typesafe-actions"
import { DeepReadonly } from "utility-types"

export enum AppActionTypes {
  ChangePageTitle = "@@app/CHANGE_TITLE",
}

export type AppAction = DeepReadonly<ActionType<typeof import("./actions")>>
