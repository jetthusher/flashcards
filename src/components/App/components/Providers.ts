import { createBrowserHistory } from "history"
import theme from "../../../themes/dark"
import configureStore from "../../../store/configureStore"
import preloadedState from "../../../store/preloadedState"
import configureProviders from "../utils/configureProviders"
import { AppLocationState } from "../../../store/types"

const history = createBrowserHistory<AppLocationState>()
const store = configureStore({ history, preloadedState })
const { persistor } = store
export default configureProviders({
  store,
  persistor,
  history,
  theme,
})
