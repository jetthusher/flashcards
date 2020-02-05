import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "."
import repeat from "../../../../utils/repeat"

const btnLabel = "Make me happy"
const getButton = (fn?: () => void) => <Button onClick={fn}>{btnLabel}</Button>

describe("Button", () => {
  it("should display text", () => {
    const { getByText } = render(getButton())
    const getButtonWithText = () => getByText(btnLabel)
    expect(getButtonWithText).not.toThrow()
  })

  it("should run a passed function", () => {
    const fn = jest.fn()
    const { getByText } = render(getButton(fn))
    repeat(() => fireEvent.click(getByText(btnLabel)), 3)
    expect(fn).toHaveBeenCalledTimes(3)
  })
})
