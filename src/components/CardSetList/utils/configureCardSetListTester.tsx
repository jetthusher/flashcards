import React from "react"
import { render } from "@testing-library/react"
import configureStore from "../../../store/configureStore"
import configureProviders from "../../App/utils/configureProviders"
import createCard from "../components/CardSet/components/Card/utils/createCard"
import createCardSet from "../components/CardSet/utils/createCardSet"
import CardSetList from ".."

export default () => {
  const name1 = "Hello"
  const card11 = createCard({ question: "Card 1-1", answer: "Answer 1-1" })
  const card12 = createCard({ question: "Card 2-2", answer: "Answer 2-2" })
  const card13 = createCard({ question: "Card 3-3", answer: "Answer 3-3" })
  const cardList1 = [card11, card12, card13]

  const name2 = "World"
  const card21 = createCard({ question: "Card 2-1", answer: "Answer 2-1" })
  const card22 = createCard({ question: "Card 2-2", answer: "Answer 2-2" })
  const card23 = createCard({ question: "Card 2-3", answer: "Answer 2-3" })
  const cardList2 = [card21, card22, card23]

  const name3 = "All around the world"
  const card31 = createCard({ question: "Card 3-1", answer: "Answer 3-1" })
  const card32 = createCard({ question: "Card 3-2", answer: "Answer 3-2" })
  const card33 = createCard({ question: "Card 3-3", answer: "Answer 3-3" })
  const cardList3 = [card31, card32, card33]

  const cardSet1 = createCardSet({ cardList: cardList1, name: name1 })
  const cardSet2 = createCardSet({ cardList: cardList2, name: name2 })
  const cardSet3 = createCardSet({ cardList: cardList3, name: name3 })

  const cardSetList = [cardSet1, cardSet2, cardSet3]
  const preloadedState = { cardSetList }
  const store = configureStore({ preloadedState })
  const Providers = configureProviders({ store })
  const utils = render(
    <Providers>
      <CardSetList />
    </Providers>,
  )

  const getCardSetName = (name: string) =>
    utils.getByDisplayValue(name) as HTMLInputElement

  const getRemoveCardSetButtons = () =>
    utils.getAllByText("Remove card set") as HTMLButtonElement[]

  const addCardSetButton = utils.getByText("Add card set") as HTMLButtonElement

  return {
    name1,
    name2,
    name3,

    addCardSetButton,

    getCardSetName,
    getRemoveCardSetButtons,
    ...utils,
  }
}
