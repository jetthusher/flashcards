import React from "react"
import { render } from "@testing-library/react"
import composeProviders from "."

const First: React.FC = ({ children }) => <main>{children}</main>
const Second: React.FC = ({ children }) => <section>{children}</section>
const Third: React.FC = ({ children }) => <nav>{children}</nav>

describe("Compose providers", () => {
  it("should compose 3 providers", () => {
    const Composed = composeProviders([First, Second, Third])
    const { container } = render(<Composed />)
    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <section>
          <nav />
        </section>
      </main>
    `)
  })
})
