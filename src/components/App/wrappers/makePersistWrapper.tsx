import React from "react"
import { PersistGate } from "redux-persist/integration/react"
import { Persistor } from "redux-persist"

export default (persistor: Persistor, loader?: JSX.Element): React.FC => ({
  children,
}) => (
  <PersistGate loading={loader} persistor={persistor}>
    {children}
  </PersistGate>
)
