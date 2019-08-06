import axios from "axios"
import history from "../history"
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
  const result = yield axios
    .get("http://localhost:3000/configuration")
    .then((response) => response.data.currencyPairs)

  const ids = Object.keys(result)
  const rates = yield fetchRates(ids)
  const data = Object.assign({}, result)
  ids.forEach((key) => {
    const hasRateInformation =
      data[key] && data[key][2] && typeof data[key][2] !== "undefined"
    if (!hasRateInformation) {
      data[key][2] = {
        current: rates[key],
        previous: rates[key]
      }
    }
    data[key][2].previous = data[key][2].current
    data[key][2].current = rates[key]
  })

  yield put({
    type: FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS,
    data
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
  const rates = yield axios
    .get("http://localhost:3000/rates", {
      params: {
        currencyPairIds: ids
      }
    })
    .catch(history.push("/error-page"))
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
