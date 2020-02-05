import { RootState } from "../../../../../../../store/types"
import { CardOwnProps } from ".."
import { getCardSetCardList } from "../../../selectors"

export const getCard = (state: RootState, props: CardOwnProps) =>
  getCardSetCardList(state, props)?.find(card => card.id === props.cardId)

export const getCardQuestion = (state: RootState, props: CardOwnProps) =>
  getCard(state, props)?.question

export const getCardAnswer = (state: RootState, props: CardOwnProps) =>
  getCard(state, props)?.answer
