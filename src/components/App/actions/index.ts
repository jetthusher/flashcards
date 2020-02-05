import { action } from "typesafe-actions"
import { AppActionTypes } from "../types"

export const createChangePageTitleAction = (title: string) =>
  action(AppActionTypes.ChangePageTitle, title)
