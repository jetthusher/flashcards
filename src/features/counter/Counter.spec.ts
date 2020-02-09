import { fireEvent } from "@testing-library/react"
import repeat from "../../utils/repeat"
import configureCounterTester from "./utils/configureCounterTester"

describe("Counter", () => {
  it("should dispaly the current count value", () => {
    const { getByText, preloadedValue } = configureCounterTester()
    const getCountValue = () => getByText(preloadedValue.toString())
    expect(getCountValue).not.toThrow()
  })

  it("should increment the counter value", () => {
    const { getByText, preloadedValue } = configureCounterTester()
    const expectedValue = (preloadedValue + 3).toString()

    const countValue = getByText(preloadedValue.toString())
    const incrementBtn = getByText("+")

    repeat(() => fireEvent.click(incrementBtn), 3)
    expect(countValue).toHaveTextContent(expectedValue)
  })

  it("should decrement the counter value", () => {
    const { getByText, preloadedValue } = configureCounterTester()
    const expectedValue = (preloadedValue - 3).toString()

    const countValue = getByText(preloadedValue.toString())
    const decrementBtn = getByText("-")

    repeat(() => fireEvent.click(decrementBtn), 3)
    expect(countValue).toHaveTextContent(expectedValue)
  })

  it("should reset the counter value", () => {
    const { getByText, preloadedValue } = configureCounterTester()
    const countValue = getByText(preloadedValue.toString())
    const resetBtn = getByText("Reset")
    fireEvent.click(resetBtn)
    expect(countValue).toHaveTextContent("0")
  })
})
