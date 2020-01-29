import React from "react"

interface Props {
  question?: string
  answer?: string
  isShowingAnswer?: boolean
}

const Flashcard: React.FC<Props> = ({
  question = "",
  answer = "",
  isShowingAnswer = false,
}) => (
  <>
    <h1>{question}</h1>
    {isShowingAnswer && <p>{answer}</p>}
  </>
)

export default Flashcard
