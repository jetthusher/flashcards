import { DeepReadonly } from "utility-types"
import configureServices from "./configureServices"

export type Services = DeepReadonly<ReturnType<typeof configureServices>>
