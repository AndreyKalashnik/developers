import React from "react"

export const Preloader = ({ loading, children }) =>
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
