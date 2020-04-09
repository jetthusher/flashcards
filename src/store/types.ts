import { PreloadedState } from "redux"
import { PersistConfig as _PersistConfig } from "redux-persist"
import { RouterAction } from "connected-react-router"
import { DeepReadonly } from "utility-types"
import configureRootReducer from "./configureRootReducer"
import { AppAction } from "../features/app/types"
import { CounterAction } from "../features/counter/types"
import { Services } from "../services/types"
import { Id } from "../services/id/types"

export type RootState = DeepReadonly<
  ReturnType<ReturnType<typeof configureRootReducer>>
>

export type PartialRootState = PreloadedState<RootState>

export interface AppLocationState {
  test: string
}

export type RootAction =
  | RouterAction<AppLocationState>
  | AppAction
  | CounterAction

export type IdList = DeepReadonly<Id[]>

export interface PersistConfig<S> extends _PersistConfig<S> {
  key: S extends RootState ? "root" : Extract<keyof S, string>
  whitelist?: Extract<keyof S, string>[]
  blacklist?: Extract<keyof S, string>[]
}

export interface SagaContext {
  services: Services
}
