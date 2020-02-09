import deepFreeze from "deep-freeze"
import {
  RecordService,
  RecordServiceDependencies,
  CreateRecord,
  UpdateRecord,
} from "./types"

export default (dependencies: RecordServiceDependencies): RecordService => {
  const createRecord: CreateRecord = object =>
    deepFreeze({
      ...object,
      id: dependencies.idService.createId(),
    })

  const editRecord: UpdateRecord = (record, options) =>
    deepFreeze({
      ...record,
      ...options,
      id: record.id,
    })

  return deepFreeze({
    createRecord,
    editRecord,
  })
}
