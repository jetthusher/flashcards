import React from "react"
import { PersistGate } from "redux-persist/integration/react"
import { Persistor } from "redux-persist"

export default (persistor: Persistor, loader: React.ReactNode): React.FC => ({
  children,
}) => (
  <div test-id="persist-provider">
    <PersistGate loading={loader} persistor={persistor}>
      {children}
    </PersistGate>
  </div>
)
