import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
import appReducer from "../components/App/reducers/appReducer"
import counterReducer from "../components/Counter/reducers/counterReducer"
import { AppLocationState } from "./types"

export interface CreateRootReducerOptions {
  routerHistory: History<AppLocationState>
}

export default ({ routerHistory }: CreateRootReducerOptions) =>
  combineReducers({
    app: appReducer,
    counter: counterReducer,
    router: connectRouter<AppLocationState>(routerHistory),
  })
