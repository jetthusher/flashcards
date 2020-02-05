import createCardSet from "."
import createCard from "../../components/Card/utils/createCard"

describe("Get card set", () => {
  it("should have an id", () => {
    expect(createCardSet().id).not.toBeUndefined()
  })

  it("should get a card set with name", () => {
    const name = "Hello"
    expect(createCardSet({ name }).name).toBe(name)
  })

  it("should get a card set with cards", () => {
    const cardList = [createCard(), createCard(), createCard()]
    expect(createCardSet({ cardList }).cardList).toEqual(cardList)
  })
})
