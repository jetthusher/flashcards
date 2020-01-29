import repeat from "."

describe("Repeat", () => {
  it("should call a function X times #1", () => {
    const fn = jest.fn()
    repeat(fn, 3)
    expect(fn).toHaveBeenCalledTimes(3)
  })

  it("should call a function X times #2", () => {
    const fn = jest.fn()
    repeat(fn, 5)
    expect(fn).toHaveBeenCalledTimes(5)
  })
})
