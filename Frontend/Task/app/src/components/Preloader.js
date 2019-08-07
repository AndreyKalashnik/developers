import React from "react"

export const Preloader = ({ loading, children }) =>
  loading ? (
    <div className="flex items-center justify-center w-full h-screen">
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
