import repeatAsync from "."

describe("Repeat async", () => {
  let fn: jest.Mock
  beforeEach(() => {
    fn = jest.fn()
  })

  it("should repeat an action x times asynchronously", async () => {
    await repeatAsync(fn, 100)
    expect(fn).toBeCalledTimes(100)
  })

  it("should reject on error", async () => {
    const throwError = () => {
      throw new Error("Error!")
    }

    await expect(repeatAsync(throwError, 3)).rejects.toThrow()
  })

  it("should fulfill with array of results", async () => {
    let count = 0
    const increment = () => {
      count += 1
      return count
    }

    const result = await repeatAsync(increment, 3)
    expect(result).toEqual([1, 2, 3])
  })
})
