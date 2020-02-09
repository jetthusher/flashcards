import { RootState } from "./types"
import darkTheme from "../features/app/themes/dark"

interface Options {
  appPageTitle?: RootState["app"]["pageTitle"]
  appTheme?: RootState["app"]["theme"]
  counterValue?: RootState["counter"]
}

export default ({
  appPageTitle = "",
  counterValue = 0,
}: Options): RootState => ({
  app: {
    pageTitle: appPageTitle,
    theme: darkTheme,
  },
  counter: counterValue,
  router: {
    action: "PUSH",
    location: {
      hash: "",
      pathname: "",
      search: "",
      key: "",
      state: {
        test: "",
      },
    },
  },
})
