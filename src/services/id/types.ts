import { DeepReadonly } from "utility-types"
import { CounterService } from "../counter/types"

export type Id = string

export type IdService = DeepReadonly<{
  createId: () => Id
}>

export type IdServiceDependencies = DeepReadonly<{
  counterService: CounterService
}>
