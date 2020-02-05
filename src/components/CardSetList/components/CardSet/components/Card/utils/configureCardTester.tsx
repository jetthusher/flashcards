import React from "react"
import { render } from "@testing-library/react"
import createCard from "./createCard"
import createCardSet from "../../../utils/createCardSet"
import { PartialRootState } from "../../../../../../../store/types"
import configureStore from "../../../../../../../store/configureStore"
import configureProviders from "../../../../../../App/utils/configureProviders"
import Card from ".."
import wrapAround from "../../../../../../../utils/wrapAround"
import { getCard } from "../selectors"

export default ({ question = "What?", answer = "Yes!" } = {}) => {
  const card = createCard({ question, answer })
  const cardSet = createCardSet({ cardList: [card] })
  const preloadedState: PartialRootState = {
    cardSetList: [cardSet],
  }

  const cardId = card.id
  const cardSetId = cardSet.id

  const store = configureStore({ preloadedState })
  const { getState } = store

  const Providers = configureProviders({ store })
  const ConfiguredCard = () => <Card cardSetId={cardSetId} cardId={cardId} />

  const CardWithProviders = wrapAround(Providers, ConfiguredCard)
  const utils = render(<CardWithProviders />)

  const questionInput = utils.getByLabelText("Question:") as HTMLInputElement
  const answerInput = utils.getByLabelText("Answer:") as HTMLInputElement
  const removeButton = utils.getByText("Remove card") as HTMLButtonElement

  const getCardFromStore = () => getCard(getState(), { cardId, cardSetId })

  return {
    getCardFromStore,
    removeButton,
    questionInput,
    answerInput,
    ...utils,
  }
}
