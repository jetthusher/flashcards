import { action } from "typesafe-actions"
import { CounterActionTypes } from "../types"

const { SyncState, Increment, Decrement, SetValue, Reset } = CounterActionTypes

export const createSyncStateAction = () => action(SyncState)
export const createIncrementAction = () => action(Increment)
export const createDecrementAction = () => action(Decrement)
export const createSetAction = (value: number) => action(SetValue, value)
export const createResetAction = () => action(Reset)
