import {
  FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS,
  SELECT_CURRENCY_PAIR,
  START_LOADING,
  STOP_LOADING
} from "../constants"

const initialState = {}

export const currencyPairsAndExchangeRatesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS:
      const data = Object.assign({}, state)
      const { rates, currencyPairs } = action.data
      Object.keys(currencyPairs).forEach((key) => {
        if (!data || !data[key]) {
          data[key] = currencyPairs[key]
        }
        const hasRateInformation =
          data[key] && data[key][2] && typeof data[key][2] !== "undefined"
        if (!hasRateInformation) {
          data[key].push({
            current: rates[key],
            previous: rates[key]
          })
        }
        data[key][2].previous = data[key][2].current
        data[key][2].current = rates[key]
      })
      return data
    default:
      return state
  }
}

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true
    case STOP_LOADING:
      return false
    default:
      return state
  }
}

export const selectedCurrencyPairReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_CURRENCY_PAIR:
      return action.data
    default:
      return state
  }
}
