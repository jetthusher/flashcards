import React from "react"
import { render } from "@testing-library/react"
import Flashcard from "."

describe(Flashcard.name, () => {
  it("should have a question", () => {
    const question = "Why on Earth?"
    const { getByText } = render(<Flashcard question={question} />)
    const getFlashcardHeader = () => getByText(question)
    expect(getFlashcardHeader).not.toThrow()
  })

  it("should not show the answer by default", () => {
    const answer = "Because"
    const { getByText } = render(<Flashcard answer={answer} />)
    const getFlashcardAnswer = () => getByText(answer)
    expect(getFlashcardAnswer).toThrow()
  })

  it("should reveal the answer", () => {
    const answer = "Because"
    const { getByText } = render(<Flashcard answer={answer} isShowingAnswer />)
    const getFlashcardAnswer = () => getByText(answer)
    expect(getFlashcardAnswer).not.toThrow()
  })
})
