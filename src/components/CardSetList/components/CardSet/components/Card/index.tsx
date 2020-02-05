import React, { ChangeEvent } from "react"
import { connect } from "react-redux"
import { RootState } from "../../../../../../store/types"
import { UniqueId } from "../../../../../../utils/getUniqueId/types"
import { getCardQuestion, getCardAnswer } from "./selectors"
import {
  createEditCardInCardSetAction,
  createRemoveCardFromCardSetAction,
} from "../../../../actions"
import Button from "../../../../../shared/components/Button"

export interface CardOwnProps {
  cardSetId: UniqueId
  cardId: UniqueId
}

const mapStateToProps = (state: RootState, props: CardOwnProps) => ({
  question: getCardQuestion(state, props),
  answer: getCardAnswer(state, props),
})

const mapDispatchToProps = {
  editCardInCardSet: createEditCardInCardSetAction,
  removeCardFromCardSet: createRemoveCardFromCardSetAction,
}

type Props = CardOwnProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const Card: React.FC<Props> = ({
  cardSetId,
  cardId,
  question = "",
  answer = "",
  editCardInCardSet,
  removeCardFromCardSet,
}) => {
  const onQuestionChange = (e: ChangeEvent<HTMLInputElement>) =>
    editCardInCardSet(cardId, cardSetId, { question: e.target.value })
  const onAnswerChange = (e: ChangeEvent<HTMLInputElement>) =>
    editCardInCardSet(cardId, cardSetId, { answer: e.target.value })
  const onRemoveClick = () => removeCardFromCardSet(cardId, cardSetId)

  const questionInputId = `${cardSetId}-${cardId}-question`
  const answerInputId = `${cardSetId}-${cardId}-answer`

  return (
    <>
      <label htmlFor={questionInputId}>
        Question:
        <input
          id={questionInputId}
          type="text"
          value={question}
          onChange={onQuestionChange}
        />
      </label>
      <label htmlFor={answerInputId}>
        Answer:
        <input
          id={answerInputId}
          type="text"
          value={answer}
          onChange={onAnswerChange}
        />
      </label>
      <Button onClick={onRemoveClick}>Remove card</Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
