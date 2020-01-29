import React from "react"
import Routes from "./components/Routes"
import { GlobalStyle } from "./components/GlobalStyle"
import Providers from "./components/Providers"
import Head from "./components/Head"

const App = () => (
  <Providers>
    <Head />
    <GlobalStyle />
    <Routes />
  </Providers>
)

export default App
