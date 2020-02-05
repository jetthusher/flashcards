import getUniqueId from "."
import repeat from "../repeat"

describe("Get unique ID", () => {
  it("should not return the same id", () => {
    const result = repeat(getUniqueId, 100000)
    const resultWithUniqueValues = Array.from(new Set(result))
    expect(resultWithUniqueValues).toEqual(result)
  })
})
