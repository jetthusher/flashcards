import React from "react"
import { render } from "@testing-library/react"
import App from "."

describe(App.name, () => {
  it("should render without crashing", () => {
    expect(() => render(<App />)).not.toThrow()
  })
})
