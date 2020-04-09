import { History } from "history"
import { Store, Action } from "redux"
import { Persistor } from "redux-persist"
import { AppLocationState } from "../../../../store/types"
import composeProviders from "../composeProviders"
import ArrayOfFilteredProviders from "../ArrayOfFilteredProviders"
import createStoreProvider from "../providerCreators/createStoreProvider"
import createPersistProvider from "../providerCreators/createPersistProvider"
import createRouterProvider from "../providerCreators/createRouterProvider"
import createThemeProvider from "../providerCreators/createThemeProvider"
import createHelmetProvider from "../providerCreators/createHelmetProvider"

interface Options<S, A extends Action> {
  store: Store<S, A>
  persistor?: Persistor
  persistLoader?: React.ReactNode
  history?: History<AppLocationState>
}

export default <S, A extends Action>({
  store,
  persistor,
  persistLoader,
  history,
}: Options<S, A>) => {
  const arrayOfFilteredProviders = new ArrayOfFilteredProviders()
  const providers = arrayOfFilteredProviders
    .addProvider(store, createStoreProvider)
    .addProvider(persistor, x => createPersistProvider(x, persistLoader))
    .addProvider(history, createRouterProvider)
    .addProvider(true, createThemeProvider)
    .addProvider(true, createHelmetProvider)

  return composeProviders(providers)
}
