import React from "react"
import { connect } from "react-redux"

export const PreloaderBase = ({ loading, children }) =>
  loading ? (
    <div>
      <div className="flex-item flex ">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  ) : (
    children
  )

const mapStateToProps = (state) => ({
  loading: state.loadingReducer
})

export const Preloader = connect(
  mapStateToProps,
  null
)(PreloaderBase)
