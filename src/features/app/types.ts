import { ActionType } from "typesafe-actions"
import { DeepReadonly } from "utility-types"

export enum AppActionTypes {
  ChangePageTitle = "@@app/CHANGE_TITLE",
  ChangeTheme = "@@app/CHANGE_THEME",
}

export type AppAction = DeepReadonly<ActionType<typeof import("./actions")>>
