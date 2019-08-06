import { FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS } from "../constants"

const initialState = {}

export const currencyPairsAndExchangeRatesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_SUCCESS:
      return Object.assign({}, state, action.data)
    default:
      return state
  }
}

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "START_LOADING":
      return true
    case "STOP_LOADING":
      return false
    default:
      return state
  }
}

export const selectedCurrencyPairReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_CURRENCY_PAIR":
      return action.data
    default:
      return state
  }
}
