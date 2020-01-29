import { RootState } from "../../../store/types"

export const selectPageTitle = (state: RootState) => state.app.pageTitle
