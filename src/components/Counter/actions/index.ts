import { action } from "typesafe-actions"
import { CounterActionTypes } from "../types"

const { Increment, Decrement, Set, Reset } = CounterActionTypes

export const makeIncrementAction = () => action(Increment)
export const makeDecrementAction = () => action(Decrement)
export const makeSetAction = (value: number) => action(Set, value)
export const makeResetAction = () => action(Reset)
