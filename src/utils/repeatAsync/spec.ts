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
    const errMsg = "Error!"
    const throwError = () => {
      throw Error(errMsg)
    }

    await expect(repeatAsync(throwError, 4)).rejects.toThrow()
  })

  it("should resolve with array of results", async () => {
    let count = 0
    const increment = () => {
      count += 1
      return count
    }

    await expect(repeatAsync(increment, 3)).resolves.toEqual([1, 2, 3])
  })
})
