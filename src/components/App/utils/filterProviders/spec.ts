import filterProviders from "."

describe("Filter providers", () => {
  it("should get only providers that have met the condition", () => {
    const w1 = jest.fn()
    const w2 = jest.fn()
    const w3 = jest.fn()

    const providers = filterProviders()
      .addProvider(true, x => w1(x))
      .addProvider(1, x => w2(x))
      .addProvider(0, x => w3(x))

    expect(w1).toHaveBeenCalledWith(true)
    expect(w2).toHaveBeenCalledWith(1)
    expect(w3).not.toBeCalled()
    expect(providers.length).toBe(2)
  })
})
