import { CardSet } from "../../types"
import getUniqueId from "../../../../../../utils/getUniqueId"
import { Card } from "../../components/Card/types"

interface MakeCardSetOptions {
  name?: string
  cardList?: Card[]
}

export default ({
  cardList = [],
  name = "",
}: MakeCardSetOptions = {}): CardSet => ({
  id: getUniqueId(),
  cardList,
  name,
})
