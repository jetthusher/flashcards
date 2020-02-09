import deepFreeze from "deep-freeze"
import { IdService, IdServiceDependencies } from "./types"

export default ({ counterService }: IdServiceDependencies): IdService =>
  deepFreeze({
    createId: () => {
      const count = counterService.increment()
      const timestamp = Date.now()
      const randomNumber = Math.round(Math.random() * 1000)
      return `${count}${timestamp}${randomNumber}`
    },
  })
