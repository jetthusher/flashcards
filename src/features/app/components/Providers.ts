import configureProviders from "../utils/configureProviders"
import store, { history } from "../../../store"

export default configureProviders({
  store,
  persistor: store.persistor,
  history,
})
