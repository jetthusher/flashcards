import { PartialRootState } from "./types"
import lightTheme from "../features/app/themes/light"

const preloadedState: PartialRootState = {
  app: {
    pageTitle: "Initial title",
    theme: lightTheme,
  },
  counter: 10,
}

export default preloadedState
