import React from 'react'

const Detail = ({ label, text }) => {
  return (
    <div className="flex m-1">
      <h3 className="w-24 text-gray-500">{label}</h3>
      <div className="space-y-6">
        <p className="text-base text-gray-500">: {text}</p>
      </div>
    </div>
  )
}

export default Detail
