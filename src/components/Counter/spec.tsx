import React from "react"
import { fireEvent } from "@testing-library/react"
import Counter from "."
import testRender from "../../utils/dev/testRender"
import repeat from "../../utils/repeat"
import configureStore from "../../store/configureStore"

const renderCounter = () => {
  const preloadedValue = Math.random()
  const preloadedState = { counter: { value: preloadedValue } }
  const store = configureStore({ preloadedState })
  return { preloadedValue, ...testRender(<Counter />, { store }) }
}

describe(Counter.name, () => {
  it("should dispaly the current count value", () => {
    const { getByText, preloadedValue } = renderCounter()
    const countValue = getByText(preloadedValue.toString())
    expect(countValue).toBeTruthy()
  })

  it("should increment the counter value", () => {
    const { getByText, preloadedValue } = renderCounter()
    const expectedValue = (preloadedValue + 3).toString()

    const countValue = getByText(preloadedValue.toString())
    const incrementBtn = getByText("+")

    repeat(() => fireEvent.click(incrementBtn), 3)
    expect(countValue).toHaveTextContent(expectedValue)
  })

  it("should decrement the counter value", () => {
    const { getByText, preloadedValue } = renderCounter()
    const expectedValue = (preloadedValue - 3).toString()

    const countValue = getByText(preloadedValue.toString())
    const decrementBtn = getByText("-")

    repeat(() => fireEvent.click(decrementBtn), 3)
    expect(countValue).toHaveTextContent(expectedValue)
  })

  it("should reset the counter value", () => {
    const { getByText, preloadedValue } = renderCounter()
    const countValue = getByText(preloadedValue.toString())
    const resetBtn = getByText("Reset")
    fireEvent.click(resetBtn)
    expect(countValue).toHaveTextContent("0")
  })
})
