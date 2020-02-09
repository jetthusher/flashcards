declare module "deep-freeze" {
  import { DeepReadonly } from "utility-types"

  export default function deepFreeze<T>(object: T): DeepReadonly<T>
}
