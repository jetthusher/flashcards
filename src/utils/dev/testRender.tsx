import React from "react"
import { render } from "@testing-library/react"
import { Action, Store } from "redux"
import { History } from "history"
import configureProviders from "../../components/App/configureProviders"
import { AppTheme } from "../../themes/types"
import { AppLocationState } from "../../store/types"

interface TestRenderOptions<S, A extends Action> {
  store: Store<S, A>
  history?: History<AppLocationState>
  theme?: AppTheme
}

export default <S, A extends Action>(
  ui: JSX.Element,
  { store, history, theme }: TestRenderOptions<S, A>,
) => {
  const Providers = configureProviders({
    reduxStore: store,
    routerHistory: history,
    theme,
  })

  return render(<Providers>{ui}</Providers>)
}
