import React from "react"
import "../index.css"
import { Preloader } from "../containers/Preloader"
import { Select } from "../containers/Select"
import { PairRateItem } from "../containers/PairRateItem"

function App() {
  return (
    <Preloader>
      <div className="flex-wrap antialiased font-sans flex items-center justify-center min-h-screen min-w-screen bg-gray-200">
        <Select />
        <div className="flex flex-item w-full justify-center">
          <PairRateItem />
        </div>
      </div>
    </Preloader>
  )
}

export default App
