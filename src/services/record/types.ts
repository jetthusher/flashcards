import { DeepReadonly } from "utility-types"
import { Id, IdService } from "../id/types"

interface ObjectWithId {
  id: Id
}

export type ReadonlyRecord<T> = DeepReadonly<T & ObjectWithId>
export type OmitId<T> = T extends ObjectWithId ? Omit<T, "id"> : T
export type EditableRecord<T> = Partial<OmitId<T>>
export type EditableRecordExclude<T, K extends keyof OmitId<T>> = Omit<
  EditableRecord<T>,
  K
>

export type CreateRecord = <T>(object: OmitId<T>) => ReadonlyRecord<OmitId<T>>
export type UpdateRecord = <T, R extends ReadonlyRecord<T>>(
  record: R,
  options: EditableRecord<R>,
) => ReadonlyRecord<R>

export type RecordService = DeepReadonly<{
  createRecord: CreateRecord
  editRecord: UpdateRecord
}>

export type RecordServiceDependencies = DeepReadonly<{
  idService: IdService
}>
