import React from "react"
import { render } from "@testing-library/react"
import { createMemoryHistory } from "history"
import configureProviders from "."
import configureStore from "../../../../store/configureStore"
import { AppLocationState } from "../../../../store/types"

describe("Configure providers", () => {
  it("should configure providers in the right order", async () => {
    const history = createMemoryHistory<AppLocationState>()
    const store = configureStore({ history })
    const { persistor } = store
    const Providers = configureProviders({ store, persistor, history })
    const { baseElement, findByText } = render(<Providers>end</Providers>)

    await findByText("end")

    expect(baseElement.firstChild).toMatchInlineSnapshot(`
      <div>
        <div
          test-id="store-provider"
        >
          <div
            test-id="persist-provider"
          >
            <div
              test-id="router-provider"
            >
              <div
                test-id="theme-provider"
              >
                <div
                  test-id="helmet-provider"
                >
                  end
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `)
  })

  it("should return store, theme and helmet providers unconditionally", async () => {
    const store = configureStore()
    const Providers = configureProviders({ store })
    const { baseElement, findByText } = render(<Providers>end</Providers>)

    await findByText("end")

    expect(baseElement.firstChild).toMatchInlineSnapshot(`
      <div>
        <div
          test-id="store-provider"
        >
          <div
            test-id="theme-provider"
          >
            <div
              test-id="helmet-provider"
            >
              end
            </div>
          </div>
        </div>
      </div>
    `)
  })
})
