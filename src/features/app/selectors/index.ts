import { RootState } from "../../../store/types"

export const getAppState = (state: RootState) => state.app
export const getPageTitle = (state: RootState) => getAppState(state).pageTitle
export const getTheme = (state: RootState) => getAppState(state).theme
