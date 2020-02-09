import objectToArrayOfValues from "."

describe("Object to array", () => {
  it("should convert an object to an array", () => {
    const obj = { one: 1, two: 2, three: 3 }
    expect(objectToArrayOfValues(obj)).toEqual([1, 2, 3])
  })
})
