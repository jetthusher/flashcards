import getArrayDifference from "."

describe("Get array difference", () => {
  it("should diff #1", () => {
    const diff = getArrayDifference([1, 2, 3], [2, 3])
    expect(diff).toEqual([1])
  })

  it("should diff #2", () => {
    const diff = getArrayDifference([undefined, null], [null, null])
    expect(diff).toEqual([undefined])
  })
})
