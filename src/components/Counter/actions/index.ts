import { action } from "typesafe-actions"
import { CounterActionTypes } from "../types"

const { Increment, Decrement, Set, Reset } = CounterActionTypes

export const createIncrementAction = () => action(Increment)
export const createDecrementAction = () => action(Decrement)
export const createSetAction = (value: number) => action(Set, value)
export const createResetAction = () => action(Reset)
