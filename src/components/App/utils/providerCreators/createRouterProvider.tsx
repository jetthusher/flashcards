import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { History } from "history"

export default (history: History): React.FC => ({ children }) => (
  <div test-id="router-provider">
    <ConnectedRouter history={history}>{children}</ConnectedRouter>
  </div>
)
