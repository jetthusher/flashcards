import React from "react"
import Router from "./components/Router"
import { GlobalStyle } from "./components/GlobalStyle"
import Providers from "./components/Providers"
import Head from "./components/Head"

const App = () => (
  <Providers>
    <Head />
    <GlobalStyle />
    <Router />
  </Providers>
)

export default App
