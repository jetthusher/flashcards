import { CardList } from "../../types"
import {
  Card,
  CardWithOptionalEditableProperties,
} from "../../components/Card/types"
import { UniqueId } from "../../../../../../utils/getUniqueId/types"
import editCard from "../../components/Card/utils/editCard"

interface API {
  addCard: (card: Card) => CardList
  removeCard: (cardId: UniqueId) => CardList
  editCard: (
    cardId: UniqueId,
    propertiesToEdit: CardWithOptionalEditableProperties,
  ) => CardList
}

export default (cardList: CardList): API => ({
  addCard: card => [...cardList, card],
  removeCard: cardId => cardList.filter(card => card.id !== cardId),
  editCard: (cardId, propertiesToEdit) =>
    cardList.map(card => {
      if (card.id === cardId) {
        return editCard(card, propertiesToEdit)
      }

      return card
    }),
})
