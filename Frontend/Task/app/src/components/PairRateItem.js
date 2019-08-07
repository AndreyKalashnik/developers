import React from "react"

export const PairRateItem = ({ current }) =>
  current ? (
    <div className="flex-item flex justify-space-between border border-gray-700 rounded-lg items-center">
      <div className="p-4 bg-gray-300 rounded-lg">
        1 {current[0].code} = {current[2].current} {current[1].code}
      </div>
      <div className="p-4 bg-gray-700 rounded-r-lg text-white">
        {current[2].current === current[2].previous && <p>STAYS</p>}
        {current[2].current > current[2].previous && <p>LOWER</p>}
        {current[2].current < current[2].previous && <p>HIGHER</p>}
      </div>
    </div>
  ) : null
