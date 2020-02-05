import { History } from "history"
import { Store, Action } from "redux"
import { Persistor } from "redux-persist"
import { AppTheme } from "../../../../themes/types"
import { AppLocationState } from "../../../../store/types"
import composeProviders from "../composeProviders"
import filterProviders from "../filterProviders"
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
  theme?: AppTheme
}

export default <S, A extends Action>({
  store,
  persistor,
  persistLoader,
  history,
  theme,
}: Options<S, A>) => {
  const providers = filterProviders()
    .addProvider(store, createStoreProvider)
    .addProvider(persistor, x => createPersistProvider(x, persistLoader))
    .addProvider(history, createRouterProvider)
    .addProvider(theme, createThemeProvider)
    .addProvider(true, createHelmetProvider)

  return composeProviders(providers)
}
