import { CardSet, CardSetWithOptionalEditableProperties } from "../../types"

export default (
  cardSet: CardSet,
  propertiesToEdit: CardSetWithOptionalEditableProperties,
): CardSet => ({
  ...cardSet,
  ...propertiesToEdit,
  id: cardSet.id,
  cardList: cardSet.cardList,
})
