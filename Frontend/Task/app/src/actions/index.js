import { FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST } from "../constants"

export const getCurrencyPairsAndExchangeRates = () => ({
  type: FETCH_CURRENCY_PAIRS_AND_EXCHANGE_RATES_REQUEST
})

export const selectCurrencyPair = (currencyPairId) => ({
  type: "SELECT_CURRENCY_PAIR",
  data: currencyPairId
})
