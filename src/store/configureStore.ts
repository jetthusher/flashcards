import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware as createRouterMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import { History, createMemoryHistory } from "history"
import { persistStore, persistReducer } from "redux-persist"
import createRootReducer from "./createRootReducer"
import { PartialRootState, AppLocationState } from "./types"
import rootSaga from "./rootSaga"
import persistConfig from "./persistConfig"

export interface ConfigureStoreOptions {
  preloadedState?: PartialRootState
  routerHistory?: History<AppLocationState>
}

export default ({
  preloadedState,
  routerHistory = createMemoryHistory(),
}: ConfigureStoreOptions = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const routerMiddleware = createRouterMiddleware(routerHistory)
  const middlewares = [sagaMiddleware, routerMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)
  const rootReducer = createRootReducer({ routerHistory })
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer, preloadedState, composedEnhancers)
  const persistor = persistStore(store)
  const runSaga = sagaMiddleware.run
  runSaga(rootSaga)
  return { ...store, persistor, runSaga }
}
