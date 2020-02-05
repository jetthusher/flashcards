import { getCardSet, getCardSetName, getCardSetCardList } from "."
import getMockedState from "../../../../../utils/dev/getMockedState"
import createCardSet from "../utils/createCardSet"
import getUniqueId from "../../../../../utils/getUniqueId"

const stateWithEmptyCardSetList = getMockedState()
const cardSet1 = createCardSet()
const cardSet2 = createCardSet()
const cardSetList = [cardSet1, cardSet2]
const state = getMockedState({ cardSetList })
const cardSet1Id = cardSet1.id
const cardSet2Id = cardSet2.id

describe("Card set selectors", () => {
  it("should select card set", () => {
    const selectedCardSet1 = getCardSet(state, { cardSetId: cardSet1Id })
    const selectedCardSet2 = getCardSet(state, { cardSetId: cardSet2Id })
    const selectedCardSet3 = getCardSet(stateWithEmptyCardSetList, {
      cardSetId: getUniqueId(),
    })

    expect(selectedCardSet1).toEqual(cardSet1)
    expect(selectedCardSet2).toEqual(cardSet2)
    expect(selectedCardSet3).toBeUndefined()
  })

  it("should select card set name", () => {
    const selectedCardSetName1 = getCardSetName(state, {
      cardSetId: cardSet1Id,
    })

    const selectedCardSetName2 = getCardSetName(state, {
      cardSetId: cardSet2Id,
    })

    const selectedCardSetName3 = getCardSetName(stateWithEmptyCardSetList, {
      cardSetId: getUniqueId(),
    })

    expect(selectedCardSetName1).toBe(cardSet1.name)
    expect(selectedCardSetName2).toBe(cardSet2.name)
    expect(selectedCardSetName3).toBeUndefined()
  })

  it("should select card set card list", () => {
    const selectedCardSetCardList1 = getCardSetCardList(state, {
      cardSetId: cardSet1Id,
    })

    const selectedCardSetCardList2 = getCardSetCardList(state, {
      cardSetId: cardSet2Id,
    })

    const selectedCardSetCardList3 = getCardSetCardList(
      stateWithEmptyCardSetList,
      {
        cardSetId: getUniqueId(),
      },
    )

    expect(selectedCardSetCardList1).toEqual(cardSet1.cardList)
    expect(selectedCardSetCardList2).toEqual(cardSet2.cardList)
    expect(selectedCardSetCardList3).toBeUndefined()
  })
})
