import { PreloadedState } from "redux"
import { PersistConfig as _PersistConfig } from "redux-persist"
import createRootReducer from "./createRootReducer"

type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }

export type RootState = DeepReadonly<
  ReturnType<ReturnType<typeof createRootReducer>>
>

export type PartialRootState = PreloadedState<RootState>

export interface PersistConfig<S> extends _PersistConfig<S> {
  key: S extends RootState ? "root" : Extract<keyof S, string>
  whitelist?: Extract<keyof S, string>[]
  blacklist?: Extract<keyof S, string>[]
}

export interface AppLocationState {
  test: string
}
