import React from "react"
import { ThemeProvider } from "styled-components"

export default <T extends {}>(theme: T): React.FC => ({ children }) => (
  <div test-id="theme-provider">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
)
