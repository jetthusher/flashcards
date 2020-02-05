import { DeepReadonly } from "utility-types"
import { UniqueId } from "../../../../../../utils/getUniqueId/types"
import { OmitId } from "../../../../../../utils/types"

export type Card = DeepReadonly<{
  id: UniqueId
  question: string
  answer: string
}>

export type CardWithOptionalEditableProperties = Partial<OmitId<Card>>
