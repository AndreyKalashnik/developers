import React from "react"

export const Select = ({ currencyPairs, onChange }) => (
  <select onChange={onChange}>
    <option value="" key="first">
      Select a currency pair
    </option>
    {Object.keys(currencyPairs).map((key) => (
      <option key={key} value={key}>
        {currencyPairs[key][0].code} to {currencyPairs[key][1].code}
      </option>
    ))}
  </select>
)
