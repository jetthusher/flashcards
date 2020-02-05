import { combineReducers } from "redux"
import { History } from "history"
import { connectRouter } from "connected-react-router"
import { AppLocationState } from "./types"
import appReducer from "../components/App/reducers/appReducer"
import counterReducer from "../components/Counter/reducers/counterReducer"
import cardSetListReducer from "../components/CardSetList/reducers/cardSetListReducer"

interface Options {
  routerHistory: History<AppLocationState>
}

export default ({ routerHistory }: Options) =>
  combineReducers({
    app: appReducer,
    counter: counterReducer,
    cardSetList: cardSetListReducer,
    router: connectRouter<AppLocationState>(routerHistory),
  })
