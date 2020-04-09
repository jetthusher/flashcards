import { createGlobalStyle, ThemeProps } from "styled-components"
import { AppTheme } from "../themes/types"

export const GlobalStyle = createGlobalStyle<ThemeProps<AppTheme>>`
  html,
  body {
    margin: 0;
    padding: 0;
    color: ${props => props.theme.textColor};
    font-family: Roboto, sans-serif;
    background-color: ${props => props.theme.backgroundColor};
  }
`
