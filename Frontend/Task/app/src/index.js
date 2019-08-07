import React from "react"
import ReactDOM from "react-dom"
import { App } from "./containers"
import { Provider } from "react-redux"
import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { logger } from "redux-logger"
import {
  currencyPairsAndExchangeRatesReducer,
  loadingReducer,
  selectedCurrencyPairReducer
} from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    currencyPairsAndExchangeRatesReducer,
    loadingReducer,
    selectedCurrencyPairReducer
  }),
  compose(
    applyMiddleware(sagaMiddleware, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (v) => v
  )
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
