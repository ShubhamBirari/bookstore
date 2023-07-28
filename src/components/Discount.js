import React from 'react'

const Discount = ({ original, current }) => {
  const discount = Math.floor(((original - current) / original) * 100)
  return (
    <span className="text-lime-600 mx-2 font-medium text-lg">
      {discount}% off
    </span>
  )
}

export default Discount
