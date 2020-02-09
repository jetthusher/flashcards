import deepFreeze from "deep-freeze"
import isDeepFrozen from "."

const createNestedObject = () => ({
  name: "jett",
  age: 5,
  data: {
    height: 99999,
    weight: 99999,
    attributes: {
      isSitting: true,
      isThinking: true,
      isNot: false,
    },
  },
})

describe("Is deep frozen", () => {
  it("should return true if an object is deeply frozen", () => {
    const object = deepFreeze(createNestedObject())
    expect(isDeepFrozen(object)).toBeTruthy()
  })

  it("should return false if an object is not deeply frozen #1", () => {
    const object = Object.freeze(createNestedObject())
    expect(isDeepFrozen(object)).toBeFalsy()
  })

  it("should return false if an object is not deeply frozen #2", () => {
    const object = createNestedObject()
    Object.freeze(object.data.attributes)
    expect(isDeepFrozen(object)).toBeFalsy()
  })
})
