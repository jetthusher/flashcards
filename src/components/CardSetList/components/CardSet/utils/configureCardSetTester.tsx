import React from "react"
import { render, fireEvent } from "@testing-library/react"
import createCard from "../components/Card/utils/createCard"
import createCardSet from "./createCardSet"
import { PartialRootState } from "../../../../../store/types"
import configureStore from "../../../../../store/configureStore"
import configureProviders from "../../../../App/utils/configureProviders"
import CardSet from ".."
import { getCardSet } from "../selectors"

export default ({ name = "" } = {}) => {
  const firstCard = createCard({ question: "First", answer: "I" })
  const secondCard = createCard({ question: "Second", answer: "II" })
  const thirdCard = createCard({ question: "Third", answer: "III" })
  const cardList = [firstCard, secondCard, thirdCard]
  const cardSet = createCardSet({ name, cardList })
  const cardSetId = cardSet.id
  const preloadedState: PartialRootState = { cardSetList: [cardSet] }
  const store = configureStore({ preloadedState })
  const { getState } = store
  const Providers = configureProviders({ store })
  const utils = render(
    <Providers>
      <CardSet cardSetId={cardSetId} />
    </Providers>,
  )

  const getCardSetFromStore = () => getCardSet(getState(), { cardSetId })

  const getCardQuestionOrAnswer = (questionOrAnswer: string) =>
    utils.getByDisplayValue(questionOrAnswer) as HTMLInputElement
  const getButton = (label: string) =>
    utils.getByText(label) as HTMLButtonElement
  const getRemoveCardButtons = () =>
    utils.getAllByText("Remove card") as HTMLButtonElement[]

  const nameInput = utils.getByLabelText("Name:") as HTMLInputElement
  const addCardButton = getButton("Add card")
  const removeCardSetButton = getButton("Remove card set")

  const fireChangeNameEvent = (newName: string) =>
    fireEvent.change(nameInput, { target: { value: newName } })

  return {
    nameInput,
    addCardButton,
    removeCardSetButton,

    fireChangeNameEvent,
    getCardSetFromStore,

    firstCard,
    secondCard,
    thirdCard,

    getCardQuestionOrAnswer,
    getButton,
    getRemoveCardButtons,
    ...utils,
  }
}
