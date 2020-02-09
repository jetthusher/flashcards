import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware as createRouterMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import { History, createMemoryHistory } from "history"
import { persistStore, persistReducer } from "redux-persist"
import configureRootReducer from "./configureRootReducer"
import { PartialRootState, AppLocationState, SagaContext } from "./types"
import rootSaga from "./rootSaga"
import persistConfig from "./persistConfig"
import { Services } from "../services/types"
import configureServices from "../services/configureServices"

interface Options {
  preloadedState?: PartialRootState
  history?: History<AppLocationState>
  services?: Services
}

export default ({
  preloadedState,
  history = createMemoryHistory(),
  services = configureServices(),
}: Options = {}) => {
  const context: SagaContext = { services }
  const sagaMiddleware = createSagaMiddleware({ context })
  const routerMiddleware = createRouterMiddleware(history)
  const middlewares = [sagaMiddleware, routerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const rootReducer = configureRootReducer({ routerHistory: history })
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, preloadedState, composedEnhancers)
  const persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { ...store, persistor }
}
