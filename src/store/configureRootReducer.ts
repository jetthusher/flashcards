import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
import { AppLocationState } from "./types"
import appReducer from "../features/app/reducers/appReducer"
import counterReducer from "../features/counter/reducers/counterReducer"

interface Options {
  routerHistory: History<AppLocationState>
}

export default ({ routerHistory }: Options) =>
  combineReducers({
    app: appReducer,
    counter: counterReducer,
    router: connectRouter<AppLocationState>(routerHistory),
  })
