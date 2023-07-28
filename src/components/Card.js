import React from 'react'
import '../index.css'

const Card = ({ item }) => {
  return (
    <div className="book-card rounded px-12 py-4">
      <div className="w-full lg:h-72">
        <img
          src={item?.url}
          alt={item?.name}
          className="h-full w-full object-cover lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 text-left">
        <div>
          <h3 className="text-sm text-gray-700">{item?.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{item?.color}</p>
        </div>
        <p className="text-sm ">
          <span className=" text-gray-900 mr-2 font-medium text-base">
            {item?.price}
          </span>
          <span className="text-gray-500 line-through text-sm">
            {item?.original_price}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Card
