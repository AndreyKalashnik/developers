import React from "react"
import ReactDOM from "react-dom"
import IndexPage from "./containers/IndexPage"
import * as serviceWorker from "./serviceWorker"
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
    <IndexPage />
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
