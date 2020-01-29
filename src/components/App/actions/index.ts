import { action } from "typesafe-actions"
import { AppActionTypes } from "../types"

export const makeChangePageTitleAction = (newTitle: string) =>
  action(AppActionTypes.ChangePageTitle, newTitle)
