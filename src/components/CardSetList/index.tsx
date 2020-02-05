import React from "react"
import { connect } from "react-redux"
import { RootState } from "../../store/types"
import { getCardSetList } from "./selectors"
import { createAddCardSetAction } from "./actions"
import createCardSet from "./components/CardSet/utils/createCardSet"
import CardSet from "./components/CardSet"
import Button from "../shared/components/Button"

const mapStateToProps = (state: RootState) => ({
  cardSetList: getCardSetList(state),
})

const mapDispatchToProps = {
  addCardSet: createAddCardSetAction,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const CardSetList: React.FC<Props> = ({ cardSetList, addCardSet }) => {
  const onAddCardSetClick = () => {
    const cardSet = createCardSet({ name: "New card set" })
    addCardSet(cardSet)
  }

  return (
    <>
      <Button onClick={onAddCardSetClick}>Add card set</Button>
      <section>
        {cardSetList.map(({ id }) => (
          <CardSet key={id} cardSetId={id} />
        ))}
      </section>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardSetList)
