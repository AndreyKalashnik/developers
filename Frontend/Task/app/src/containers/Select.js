import React from "react"
import { connect } from "react-redux"
import { getConfiguration } from "../actions"

class SelectBase extends React.Component {
  componentDidMount() {
    const { getConfiguration } = this.props
    getConfiguration()
  }

  render() {
    const { configuration } = this.props
    console.log("configs", configuration)
    return (
      <div className="flex-item flex ">
        <select>
          <option value="bb1">USD to UAH</option>
          <option value="aa1">ARS to CZK</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  configuration: state.currencyPairs
})

const mapDispatchToProps = {
  getConfiguration: getConfiguration
}

export const Select = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectBase)
