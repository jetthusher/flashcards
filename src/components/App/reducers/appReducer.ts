import { combineReducers } from "redux"
import pageTitleReducer from "./pageTitleReducer"

export default combineReducers({
  pageTitle: pageTitleReducer,
})
