import configureStore from "../../store/configureStore"
import { RootState } from "../../store/types"

interface GetMockStateOptions {
  appPageTitle?: RootState["app"]["pageTitle"]
  counterValue?: RootState["counter"]["value"]
}

export default ({ appPageTitle, counterValue }: GetMockStateOptions) =>
  configureStore({
    preloadedState: {
      app: {
        pageTitle: appPageTitle,
      },
      counter: {
        value: counterValue,
      },
    },
  }).getState()
