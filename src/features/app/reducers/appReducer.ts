import { combineReducers } from "redux"
import pageTitleReducer from "./pageTitleReducer"
import themeReducer from "./themeReducer"

export default combineReducers({
  pageTitle: pageTitleReducer,
  theme: themeReducer,
})
