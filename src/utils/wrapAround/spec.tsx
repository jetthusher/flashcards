import React from "react"
import { render } from "@testing-library/react"
import wrapAround from "."

const Outer: React.FC = ({ children }) => <main>{children}</main>
const Inner: React.FC = ({ children }) => <section>{children}</section>

describe("Wrap around", () => {
  it("should wrap one component around another", () => {
    const Wrapped = wrapAround(Outer, Inner)
    const { container } = render(<Wrapped />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <section />
      </main>
    `)
  })
})
