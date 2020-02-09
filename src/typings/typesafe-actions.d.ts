import { RootAction } from "../store/types"

declare module "typesafe-actions" {
  interface Types {
    RootAction: RootAction
  }
}
