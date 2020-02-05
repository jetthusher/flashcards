import { Card, CardWithOptionalEditableProperties } from "../../types"

export default (
  card: Card,
  propertiesToEdit: CardWithOptionalEditableProperties,
): Card => ({ ...card, ...propertiesToEdit, id: card.id })
