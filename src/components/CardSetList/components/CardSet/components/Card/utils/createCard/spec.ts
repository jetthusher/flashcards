import createCard from "."

describe("Get card", () => {
  it("should have an id", () => {
    expect(createCard().id).not.toBeUndefined()
  })

  it("should have a question", () => {
    const question = "What?"
    expect(createCard({ question }).question).toBe(question)
  })

  it("should have an answer", () => {
    const answer = "Yes"
    expect(createCard({ answer }).answer).toBe(answer)
  })
})
