import React from "react"
import "../index.css"
import { PairRateItem, Select } from "./"

function App({ currencyPairs }) {
  return (
    <div className="flex-wrap antialiased font-sans flex items-center justify-center min-h-screen min-w-screen bg-gray-200">
      <Select options={currencyPairs} />
      <div className="flex flex-item w-full justify-center">
        <PairRateItem from={2} to={251} />
      </div>
    </div>
  )
}

export default App
