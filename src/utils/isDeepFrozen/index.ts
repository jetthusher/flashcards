import { DeepReadonly } from "utility-types"

const isFrozen = <T>(x: unknown): x is Readonly<T> => Object.isFrozen(x)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isDeepFrozen = <T>(object: any): object is DeepReadonly<T> => {
  if (typeof object === "object") {
    const keys = Object.keys(object)
    for (const key of keys) {
      const value = object[key]
      if (!isDeepFrozen(value)) {
        return false
      }
    }
  }

  return isFrozen(object)
}

export default isDeepFrozen
