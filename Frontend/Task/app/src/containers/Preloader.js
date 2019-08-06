import React from "react"
import { connect } from "react-redux"
import { Preloader as PreloaderCmp } from "../components"

const PreloaderBase = ({ loading, children }) => (
  <PreloaderCmp loading={loading}>
    <children />
  </PreloaderCmp>
)
const mapStateToProps = (state) => ({
  loading: state.loadingReducer
})

const Preloader = connect(
  mapStateToProps,
  null
)(PreloaderBase)

export default Preloader
