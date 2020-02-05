import React, { ChangeEvent } from "react"
import { connect } from "react-redux"
import { UniqueId } from "../../../../utils/getUniqueId/types"
import { RootState } from "../../../../store/types"
import { getCardSetName, getCardSetCardList } from "./selectors"
import {
  createAddCardToCardSetAction,
  createEditCardSetAction,
  createRemoveCardSetAction,
} from "../../actions"
import Card from "./components/Card"
import createCard from "./components/Card/utils/createCard"
import Button from "../../../shared/components/Button"

export interface CardSetOwnProps {
  cardSetId: UniqueId
}

const mapStateToProps = (state: RootState, props: CardSetOwnProps) => ({
  name: getCardSetName(state, props),
  cardList: getCardSetCardList(state, props),
})

const mapDispatchToProps = {
  editCardSet: createEditCardSetAction,
  removeCardSet: createRemoveCardSetAction,
  addCardToCardSet: createAddCardToCardSetAction,
}

type Props = CardSetOwnProps &
  ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps

const CardSet: React.FC<Props> = ({
  cardSetId,
  name = "",
  cardList = [],
  editCardSet,
  removeCardSet,
  addCardToCardSet,
}) => {
  const onCardSetNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    editCardSet(cardSetId, { name: e.target.value })
  }

  const onAddCardClick = () => {
    const card = createCard({ question: "New card", answer: "New life" })
    addCardToCardSet(card, cardSetId)
  }

  const onRemoveCardSetClick = () => {
    removeCardSet(cardSetId)
  }

  const cardSetInputId = `${cardSetId}-name`

  return (
    <>
      <label htmlFor={cardSetInputId}>
        Name:
        <input
          id={cardSetInputId}
          value={name}
          onChange={onCardSetNameChange}
        />
      </label>
      <Button onClick={onAddCardClick}>Add card</Button>
      <section>
        {cardList.map(card => (
          <Card key={card.id} cardId={card.id} cardSetId={cardSetId} />
        ))}
      </section>
      <Button type="button" onClick={onRemoveCardSetClick}>
        Remove card set
      </Button>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSet)
