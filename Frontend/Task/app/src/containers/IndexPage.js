import React from "react"
import { connect } from "react-redux"
import {
  getCurrencyPairsAndExchangeRates,
  selectCurrencyPair
} from "../actions"
import { Select, PairRateItem, Preloader } from "../components"

class SelectBase extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getCurrencyPairsAndExchangeRates())
  }

  render() {
    const {
      currencyPairs,
      loading,
      selectedCurrencyPair,
      dispatch
    } = this.props
    return (
      <Preloader loading={loading}>
        {currencyPairs && Object.keys(currencyPairs).length > 0 && (
          <div className="flex-wrap antialiased font-sans flex items-center justify-center min-h-screen min-w-screen bg-gray-200">
            <div className="flex-item flex">
              <Select
                currencyPairs={currencyPairs}
                onChange={({ target }) => {
                  dispatch(selectCurrencyPair(target.value))
                }}
              />
            </div>
            <div className="flex flex-item w-full justify-center">
              <PairRateItem current={currencyPairs[selectedCurrencyPair]} />
            </div>
          </div>
        )}
      </Preloader>
    )
  }
}

const mapStateToProps = (state) => ({
  currencyPairs: (state && state.currencyPairsAndExchangeRatesReducer) || false,
  loading: state.loadingReducer,
  selectedCurrencyPair: state.selectedCurrencyPairReducer
})

const IndexPage = connect(mapStateToProps)(SelectBase)

export default IndexPage
