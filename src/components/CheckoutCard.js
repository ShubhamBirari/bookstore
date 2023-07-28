import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../redux/books'

const CheckoutCard = ({ item }) => {
  const dispatch = useDispatch()
  const book = item
  return (
    <>
      <div className="mb-6 pb-6 border-b	">
        <div className="flex">
          <div className="hidden overflow-hidden rounded lg:block mr-8 text-center">
            <div className="w-full flex justify-center">
              <img
                src={book?.url}
                loading="lazy"
                alt="url"
                className="h-40 w-26"
              />
            </div>
          </div>
          <div>
            <span className="text-gray-900 text-lg">{book?.name}</span>
            <p className=" text-gray-500 font-light text-base mb-6">
              {book?.highlights?.binding}
            </p>
            <p className="text-gray-500 font-light text-base mb-8">
              Seller:{book?.highlights?.publisher}, {book?.author}
            </p>
            <p className="text-sm ">
              <span className="text-gray-500 mr-2 line-through text-base">
                {item?.currency}
                {item?.original_price}
              </span>
              <span className=" text-gray-900 font-medium text-xl">
                {item?.currency}
                {item?.current_price}
              </span>
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex mt-4 items-center">
            <Button
              label="-"
              disabled={item.quantity == 1}
              className="text-white rounded-full text-lg w-8 border border-1 border-gray-400"
              onClick={() => dispatch(decreaseQuantity(item))}
            />
            <span className="w-10 flex justify-center">{item.quantity}</span>
            <Button
              label="+"
              disabled={item.quantity == 10}
              className="text-white rounded-full text-lg w-8 border border-1 border-gray-400"
              onClick={() => dispatch(increaseQuantity(item))}
            />
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default CheckoutCard
