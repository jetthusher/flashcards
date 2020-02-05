import { fireEvent } from "@testing-library/react"
import configureCardSetListTester from "./utils/configureCardSetListTester"

describe("Card set list", () => {
  it("should have card sets", () => {
    const { name1, name2, name3, getCardSetName } = configureCardSetListTester()
    const getFirstCardSet = () => getCardSetName(name1)
    const getSecondCardSet = () => getCardSetName(name2)
    const getThirdCardSet = () => getCardSetName(name3)

    expect(getFirstCardSet).not.toThrow()
    expect(getSecondCardSet).not.toThrow()
    expect(getThirdCardSet).not.toThrow()
  })

  it("should add card set", () => {
    const { getCardSetName, addCardSetButton } = configureCardSetListTester()
    const getNewCardSetName = () => getCardSetName("New card set")

    expect(getNewCardSetName).toThrow()
    fireEvent.click(addCardSetButton)
    expect(getNewCardSetName).not.toThrow()
  })

  it("should remove card set", () => {
    const {
      getRemoveCardSetButtons,
      getCardSetName,
      name1,
      name2,
      name3,
    } = configureCardSetListTester()

    const [button1, button2] = getRemoveCardSetButtons()
    fireEvent.click(button1)
    fireEvent.click(button2)

    const getFirstCardSet = () => getCardSetName(name1)
    const getSecondCardSet = () => getCardSetName(name2)
    const getThirdCardSet = () => getCardSetName(name3)

    expect(getFirstCardSet).toThrow()
    expect(getSecondCardSet).toThrow()
    expect(getThirdCardSet).not.toThrow()
  })
})
