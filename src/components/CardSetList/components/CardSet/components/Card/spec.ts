import { fireEvent } from "@testing-library/react"
import configureCardTester from "./utils/configureCardTester"

describe("Card", () => {
  it("should have a question", () => {
    const question = "Why on Earth?"
    const { questionInput } = configureCardTester({ question })
    expect(questionInput.value).toBe(question)
  })

  it("should have an answer", () => {
    const answer = "Because"
    const { answerInput } = configureCardTester({ answer })
    expect(answerInput.value).toBe(answer)
  })

  it("should edit card", async () => {
    const question = "AAA"
    const answer = "QQQ"
    const newQuestion = "OOO"
    const newAnswer = "UUU"
    const { questionInput, answerInput } = configureCardTester({
      question,
      answer,
    })

    fireEvent.change(questionInput, { target: { value: newQuestion } })
    fireEvent.change(answerInput, { target: { value: newAnswer } })

    expect(questionInput.value).toBe(newQuestion)
    expect(answerInput.value).toBe(newAnswer)
  })

  it("should remove card", () => {
    const question = "UUU"
    const answer = "AAA"
    const {
      getCardFromStore,
      removeButton,
      questionInput,
      answerInput,
    } = configureCardTester({
      question,
      answer,
    })

    expect(questionInput.value).toBe(question)
    expect(answerInput.value).toBe(answer)

    fireEvent.click(removeButton)
    const removedCard = getCardFromStore()
    expect(removedCard).toBeUndefined()
  })
})
