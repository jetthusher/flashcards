import { ActionType } from "typesafe-actions"

export enum AppActionTypes {
  ChangePageTitle = "@@app/CHANGE_TITLE",
}

export type AppAction = Readonly<ActionType<typeof import("./actions")>>
