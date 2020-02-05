import { fireEvent } from "@testing-library/react"
import configureCardSetTester from "./utils/configureCardSetTester"

describe("Card set", () => {
  it("should have a name", () => {
    const name = "Hello"
    const { nameInput } = configureCardSetTester({ name })
    expect(nameInput.value).toBe(name)
  })

  it("should have cards", () => {
    const {
      getCardQuestionOrAnswer,
      firstCard,
      secondCard,
      thirdCard,
    } = configureCardSetTester()

    const getFirstCardQuestion = () =>
      getCardQuestionOrAnswer(firstCard.question)

    const getSecondCardQuestion = () =>
      getCardQuestionOrAnswer(secondCard.question)

    const getThirdCardQuestion = () =>
      getCardQuestionOrAnswer(thirdCard.question)

    expect(getFirstCardQuestion).not.toThrow()
    expect(getSecondCardQuestion).not.toThrow()
    expect(getThirdCardQuestion).not.toThrow()
  })

  it("should add cards", async () => {
    const { addCardButton, getCardQuestionOrAnswer } = configureCardSetTester()

    fireEvent.click(addCardButton)
    const getNewCardQuestion = () => getCardQuestionOrAnswer("New card")
    const getNewCardAnswer = () => getCardQuestionOrAnswer("New life")

    expect(getNewCardQuestion).not.toThrow()
    expect(getNewCardAnswer).not.toThrow()
  })

  it("should remove cards", () => {
    const {
      getRemoveCardButtons,
      getCardQuestionOrAnswer,
      firstCard,
      thirdCard,
    } = configureCardSetTester()

    const [firstRemoveButton, , thirdRemoveButton] = getRemoveCardButtons()

    fireEvent.click(firstRemoveButton)
    fireEvent.click(thirdRemoveButton)

    const getFirstCardQuestion = () =>
      getCardQuestionOrAnswer(firstCard.question)

    const getFirstCardAnswer = () => getCardQuestionOrAnswer(firstCard.answer)

    const getThirdCardQuestion = () =>
      getCardQuestionOrAnswer(thirdCard.question)

    const getThirdCardAnswer = () => getCardQuestionOrAnswer(thirdCard.answer)

    expect(getFirstCardQuestion).toThrow()
    expect(getFirstCardAnswer).toThrow()
    expect(getThirdCardQuestion).toThrow()
    expect(getThirdCardAnswer).toThrow()
  })

  it("should rename", () => {
    const name = "Wohoo"
    const { nameInput, fireChangeNameEvent } = configureCardSetTester({ name })
    expect(nameInput.value).toBe(name)

    const newName = "EAAAHHHH"
    fireChangeNameEvent(newName)
    expect(nameInput.value).toBe(newName)
  })

  it("should remove itself", () => {
    const {
      removeCardSetButton,
      getCardSetFromStore,
    } = configureCardSetTester()

    const cardSetInStoreBefore = getCardSetFromStore()
    expect(cardSetInStoreBefore).not.toBeUndefined()

    fireEvent.click(removeCardSetButton)
    const cardSetInStoreAfter = getCardSetFromStore()
    expect(cardSetInStoreAfter).toBeUndefined()
  })
})
