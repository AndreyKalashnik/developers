import React from "react"
import "../index.css"

function ErrorPage() {
  return (
    <div className="antialiased font-sans flex items-center justify-center flex-col min-h-screen min-w-screen bg-gray-200">
      <div className="flex-item flex justify-space-between border border-gray-700 rounded-lg items-center my-6">
        <div className="p-4 bg-gray-300 rounded-l-lg">500</div>
        <div className="p-4">
          An error occoured during loading the data, please try again.
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Refresh the page
      </button>
    </div>
  )
}

export default ErrorPage
