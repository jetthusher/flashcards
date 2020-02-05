import React from "react"
import { render } from "@testing-library/react"
import configureStore from "../../../store/configureStore"
import configureProviders from "../../App/utils/configureProviders"
import wrapAround from "../../../utils/wrapAround"
import Counter from ".."

export default ({ value = Math.random() } = {}) => {
  const preloadedState = { counter: { value } }
  const store = configureStore({ preloadedState })
  const Providers = configureProviders({ store })
  const CounterWithProviders = wrapAround(Providers, Counter)
  const reactTestingUtils = render(<CounterWithProviders />)
  return { preloadedValue: value, ...reactTestingUtils }
}
