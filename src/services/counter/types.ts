import { DeepReadonly } from "utility-types"

export interface CounterServiceInitialState {
  value?: number
  step?: number
  max?: number
  min?: number
}

export type CounterService = DeepReadonly<{
  getValue: () => number
  getStep: () => number
  getMax: () => number
  getMin: () => number
  setValue: (value: number) => number
  setStep: (value: number) => void
  setMax: (value: number) => number
  setMin: (value: number) => number
  reset: () => number
  increment: () => number
  decrement: () => number
}>
