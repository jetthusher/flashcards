import editCard from "."
import createCard from "../createCard"

describe("Edit card", () => {
  it("should edit card without changing id", () => {
    const question = "Hmmm..."
    const answer = "Aha!"
    const card = createCard()
    const editedCard = editCard(card, { question, answer })
    expect(editedCard).toEqual({
      id: card.id,
      question,
      answer,
    })
  })
})
