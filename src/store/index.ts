import { createBrowserHistory } from "history"
import configureStore from "./configureStore"
import preloadedState from "./preloadedState"
import { AppLocationState } from "./types"
import services from "../services"

export const history = createBrowserHistory<AppLocationState>()
export default configureStore({ preloadedState, history, services })
