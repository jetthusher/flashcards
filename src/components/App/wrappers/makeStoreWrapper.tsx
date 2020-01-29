import React from "react"
import { Provider as StoreProvider } from "react-redux"
import { Action, Store } from "redux"

export default <S, A extends Action>(store: Store<S, A>): React.FC => ({
  children,
}) => <StoreProvider store={store}>{children}</StoreProvider>
