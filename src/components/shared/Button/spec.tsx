import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Button from "."

const btnLabel = "Make me happy"
const getButton = (fn?: () => void) => <Button onClick={fn}>{btnLabel}</Button>

describe(Button.name, () => {
  it("should display text", () => {
    const { getByText } = render(getButton())
    expect(getByText(btnLabel)).toHaveTextContent(btnLabel)
  })

  it("should run a passed function", () => {
    const fn = jest.fn()
    const { getByText } = render(getButton(fn))
    fireEvent.click(getByText(btnLabel))
    fireEvent.click(getByText(btnLabel))
    fireEvent.click(getByText(btnLabel))
    expect(fn).toHaveBeenCalledTimes(3)
  })
})
