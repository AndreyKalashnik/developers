import React from "react"
import "../index.css"
import { Preloader } from "../containers/Preloader"
import { Select } from "../containers/Select"
import { PairRateItem } from "../containers/PairRateItem"

function App() {
  return (
    <div className="antialiased font-sans flex items-center justify-center min-h-screen min-w-screen bg-gray-200">
      <Preloader />
      <Select />
      <PairRateItem />
    </div>
  )
}

export default App
