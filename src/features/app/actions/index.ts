import { action } from "typesafe-actions"
import { AppActionTypes } from "../types"
import { AppTheme } from "../themes/types"

const { ChangePageTitle, ChangeTheme } = AppActionTypes

export const createChangePageTitleAction = (title: string) =>
  action(ChangePageTitle, title)

export const createChangeThemeAction = (theme: AppTheme) =>
  action(ChangeTheme, theme)
