import axios from "axios"
import { put, takeLatest, all } from "redux-saga/effects"
import {
  FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST,
  FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS
} from "../constants"
const DEFAULT_TIMER_START_TIMEOUT = 1000

let loadedAtLeastOnce = false

function* fetchConfiguration() {
  if (!loadedAtLeastOnce) {
    yield put({
      type: "START_LOADING"
    })
  }
  const currencyPairs = yield axios
    .get("http://localhost:3000/configuration")
    .then((response) => response.data.currencyPairs)
    .catch((err) => err)

  // Can't even start the request, start over.
  if (!currencyPairs) {
    yield put({
      type: FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST
    })
    return
  }
  const ids = Object.keys(currencyPairs)
  const rates = yield fetchRates(ids)

  yield put({
    type: FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS,
    data: {
      currencyPairs,
      rates
    }
  })

  if (!loadedAtLeastOnce) {
    yield put({
      type: "STOP_LOADING"
    })
    loadedAtLeastOnce = true
  }
  setTimeout(
    yield put({
      type: FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST
    }),
    DEFAULT_TIMER_START_TIMEOUT
  )
}

function* fetchRates(ids) {
  const rates = yield axios.get("http://localhost:3000/rates", {
    params: {
      currencyPairIds: ids
    }
  })
  console.log("rates", rates.data.rates)
  return rates.data.rates
}

function* actionWatcher() {
  yield takeLatest(
    FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST,
    fetchConfiguration
  )
}

export default function* rootSaga() {
  yield all([actionWatcher()])
}
