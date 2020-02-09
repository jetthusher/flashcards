import { PreloadedState } from "redux"
import { PersistConfig as _PersistConfig } from "redux-persist"
import { DeepReadonly } from "utility-types"
import { StateType } from "typesafe-actions"
import { RouterAction } from "connected-react-router"
import createRootReducer from "./configureRootReducer"
import { AppAction } from "../features/app/types"
import { CounterAction } from "../features/counter/types"
import { Services } from "../services/types"

type ConfiguredRootReducer = ReturnType<typeof createRootReducer>
export type RootState = DeepReadonly<StateType<ConfiguredRootReducer>>
export type PartialRootState = DeepReadonly<
  PreloadedState<ReturnType<ConfiguredRootReducer>>
>

export interface AppLocationState {
  test: string
}

type ReactRouterAction = RouterAction<AppLocationState>
export type RootAction = ReactRouterAction | AppAction | CounterAction

export interface PersistConfig<S> extends _PersistConfig<S> {
  key: S extends RootState ? "root" : Extract<keyof S, string>
  whitelist?: Extract<keyof S, string>[]
  blacklist?: Extract<keyof S, string>[]
}

export interface SagaContext {
  services: Services
}
