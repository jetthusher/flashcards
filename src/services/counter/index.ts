import deepFreeze from "deep-freeze"
import { CounterService, CounterServiceInitialState } from "./types"

export default () => (
  initialState: CounterServiceInitialState = {},
): CounterService => {
  const limitToSafeIntegers = (value: number) => {
    const maxInt = Number.MAX_SAFE_INTEGER
    const minInt = Number.MIN_SAFE_INTEGER
    return Math.floor(Math.max(minInt, Math.min(value, maxInt)))
  }

  let max = limitToSafeIntegers(initialState.max ?? Number.MAX_SAFE_INTEGER)
  let min = limitToSafeIntegers(initialState.min ?? Number.MIN_SAFE_INTEGER)

  const limit = (value: number) =>
    Math.floor(Math.max(min, Math.min(value, max)))

  let count = limit(initialState.value ?? 0)
  let step = limit(initialState.step ?? 1)

  const getValue = () => count
  const getStep = () => step
  const getMax = () => max
  const getMin = () => min

  const setValue = (value: number) => {
    count = limit(value)
    return getValue()
  }

  const setStep = (value: number) => {
    step = limitToSafeIntegers(value)
  }

  const setMax = (value: number) => {
    max = limitToSafeIntegers(value)
    return setValue(getValue())
  }

  const setMin = (value: number) => {
    min = limitToSafeIntegers(value)
    return setValue(getValue())
  }

  const reset = () => setValue(0)

  const increment = () => setValue(count + step)

  const decrement = () => setValue(count - step)

  return deepFreeze({
    getValue,
    getStep,
    getMax,
    getMin,
    setValue,
    setStep,
    setMax,
    setMin,
    reset,
    increment,
    decrement,
  })
}
