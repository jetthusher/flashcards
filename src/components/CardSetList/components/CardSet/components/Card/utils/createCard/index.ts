import { Card } from "../../types"
import getUniqueId from "../../../../../../../../utils/getUniqueId"

interface MakeCardOptions {
  question?: string
  answer?: string
}

export default ({
  question = "",
  answer = "",
}: MakeCardOptions = {}): Card => ({
  id: getUniqueId(),
  question,
  answer,
})
