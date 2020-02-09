import repeatAsync from "../../utils/repeatAsync"
import isDeepFrozen from "../../utils/isDeepFrozen"
import configureServices from "../configureServices"

describe("Id service", () => {
  const { id } = configureServices()

  it("should be immutable", () => {
    expect(isDeepFrozen(id)).toBeTruthy()
  })

  it("should not return the same id", async () => {
    const result = await repeatAsync(() => id.createId(), 1000)
    const resultWithUniqueValues = Array.from(new Set(result))
    expect(resultWithUniqueValues).toEqual(result)
  })
})
