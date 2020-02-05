import React from "react"
import { HelmetProvider } from "react-helmet-async"

export default (): React.FC => ({ children }) => (
  <div test-id="helmet-provider">
    <HelmetProvider>{children}</HelmetProvider>
  </div>
)
