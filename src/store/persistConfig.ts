import storage from "localforage"
import { RootState, PersistConfig } from "./types"

const persistConfig: PersistConfig<RootState> = {
  storage,
  key: "root",
  whitelist: ["counter"],
}

export default persistConfig
