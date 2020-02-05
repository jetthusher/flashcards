import { RootState } from "../../../../../store/types"
import { CardSetOwnProps } from ".."
import { getCardSetList } from "../../../selectors"

export const getCardSet = (state: RootState, props: CardSetOwnProps) =>
  getCardSetList(state).find(cardSet => cardSet.id === props.cardSetId)

export const getCardSetName = (state: RootState, props: CardSetOwnProps) =>
  getCardSet(state, props)?.name

export const getCardSetCardList = (state: RootState, props: CardSetOwnProps) =>
  getCardSet(state, props)?.cardList
