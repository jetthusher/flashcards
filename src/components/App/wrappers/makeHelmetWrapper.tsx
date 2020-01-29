import React from "react"
import { HelmetProvider } from "react-helmet-async"

export default (): React.FC => ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
)
