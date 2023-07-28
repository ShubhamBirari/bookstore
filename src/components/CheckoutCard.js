import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../redux/books'

const CheckoutCard = ({ item }) => {
  const dispatch = useDispatch()
  const book = item
  return (
    <>
      <div className="flex pb-8">
        <div className="hidden overflow-hidden rounded lg:block mr-4">
          <div></div>
          <img
            src={book?.url}
            alt="url"
            className="object-center h-24 w-16 mb-1"
          />
          <div className="flex">
            <Button
              label="-"
              disabled={item.quantity == 1}
              className="text-white"
              onClick={() => dispatch(decreaseQuantity(item))}
            />
            <span className="mx-2">{item.quantity}</span>
            <Button
              label="+"
              disabled={item.quantity == 10}
              className="text-white"
              onClick={() => dispatch(increaseQuantity(item))}
            />
          </div>
        </div>
        <div>
          <h1>{book?.name}</h1>
          <p>{book?.highlights?.binding}</p>
          <p>{book?.highlights?.publisher}</p>
          <p className="text-sm ">
            <span className=" text-gray-900 mr-2 font-medium text-base">
              {item?.currency}
              {item?.current_price}
            </span>
            <span className="text-gray-500 line-through text-sm">
              {item?.currency}
              {item?.original_price}
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default CheckoutCard
