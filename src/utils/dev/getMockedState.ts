import { RootState } from "../../store/types"

interface Options {
  appPageTitle?: RootState["app"]["pageTitle"]
  counterValue?: RootState["counter"]["value"]
  cardSetList?: RootState["cardSetList"]
}

export default ({
  appPageTitle = "",
  counterValue = 0,
  cardSetList = [],
}: Options = {}): RootState => ({
  app: {
    pageTitle: appPageTitle,
  },
  counter: {
    value: counterValue,
  },
  cardSetList,
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
