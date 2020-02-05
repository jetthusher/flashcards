import { DeepReadonly } from "utility-types"
import { Card } from "./components/Card/types"
import { UniqueId } from "../../../../utils/getUniqueId/types"
import { OmitId } from "../../../../utils/types"

export type CardSet = DeepReadonly<{
  id: UniqueId
  name: string
  cardList: Card[]
}>

export type CardList = CardSet["cardList"]
export type CardSetWithOptionalEditableProperties = Partial<
  OmitId<Omit<CardSet, "cardList">>
>
