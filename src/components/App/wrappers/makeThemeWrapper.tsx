import React from "react"
import { ThemeProvider } from "styled-components"

export default <T extends {}>(theme: T): React.FC => ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
