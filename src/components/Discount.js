import React from 'react'

const Discount = ({ original, current, className }) => {
  const discount = Math.floor(((original - current) / original) * 100)
  return (
    <span className={`text-lime-600 mx-2 ${className}`}>{discount}% off</span>
  )
}

export default Discount
