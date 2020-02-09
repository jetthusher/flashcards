import React from "react"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import { getTheme } from "../../selectors"
import { RootState } from "../../../../store/types"

const mapStateToProps = (state: RootState) => ({
  theme: getTheme(state),
})

const ConnectedThemeProvider: React.FC<ReturnType<typeof mapStateToProps>> = ({
  children,
  theme,
}) => (
  <div test-id="theme-provider">
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
)

export default () => connect(mapStateToProps)(ConnectedThemeProvider)
