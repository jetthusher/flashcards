import React from "react"
import { History } from "history"
import { Store, Action } from "redux"
import { Persistor } from "redux-persist"
import { AppTheme } from "../../themes/types"
import { AppLocationState } from "../../store/types"
import composeWrappers from "../../utils/composeWrappers"
import makeStoreWrapper from "./wrappers/makeStoreWrapper"
import makePersistWrapper from "./wrappers/makePersistWrapper"
import makeRouterWrapper from "./wrappers/makeRouterWrapper"
import makeThemeWrapper from "./wrappers/makeThemeWrapper"
import makeHelmetWrapper from "./wrappers/makeHelmetWrapper"

interface ConfigureProvidersOptions<S, A extends Action> {
  reduxStore: Store<S, A>
  reduxPersistor?: Persistor
  reduxPersistLoader?: JSX.Element
  routerHistory?: History<AppLocationState>
  theme?: AppTheme
}

export default <S, A extends Action>({
  reduxStore,
  reduxPersistor,
  reduxPersistLoader,
  routerHistory,
  theme,
}: ConfigureProvidersOptions<S, A>) => {
  const wrappers: React.ComponentType[] = []

  const StoreWrapper = makeStoreWrapper(reduxStore)
  wrappers.push(StoreWrapper)

  if (reduxPersistor) {
    const Wrapper = makePersistWrapper(reduxPersistor, reduxPersistLoader)
    wrappers.push(Wrapper)
  }

  if (routerHistory) {
    const Wrapper = makeRouterWrapper(routerHistory)
    wrappers.push(Wrapper)
  }

  if (theme) {
    const Wrapper = makeThemeWrapper(theme)
    wrappers.push(Wrapper)
  }

  const HelmetWrapper = makeHelmetWrapper()
  wrappers.push(HelmetWrapper)

  const Providers = composeWrappers(wrappers)

  return Providers
}
