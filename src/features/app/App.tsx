import React from "react"
import Providers from "./components/Providers"
import Head from "./components/Head"
import { GlobalStyle } from "./components/GlobalStyle"
import Router from "./components/Router"
import Shell from "./components/Shell"

export default () => (
  <Providers>
    <Head />
    <GlobalStyle />
    <Shell>
      <Router />
    </Shell>
  </Providers>
)
