import { createBrowserHistory } from "history"
import theme from "../../../themes/dark"
import configureStore from "../../../store/configureStore"
import preloadedState from "../../../store/preloadedState"
import configureProviders from "../configureProviders"
import { AppLocationState } from "../../../store/types"

const routerHistory = createBrowserHistory<AppLocationState>()
const reduxStore = configureStore({ routerHistory, preloadedState })
const { persistor: reduxPersistor } = reduxStore
export default configureProviders({
  reduxStore,
  reduxPersistor,
  routerHistory,
  theme,
})
