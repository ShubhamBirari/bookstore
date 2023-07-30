import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectItem } from '../redux/books'
import Discount from './Discount'
import Image from './Image'

const Card = ({ item }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div
      className="book-card rounded px-8 py-4 bg-white"
      onClick={() => {
        navigate('/detail')
        dispatch(selectItem(item))
      }}
    >
      <div className="w-full lg:h-64">
        <Image
          src={item?.url}
          alt={item?.name}
          className="h-full w-full lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 text-left">
        <div>
          <h3 className="text-sm text-gray-700 truncate">{item?.name}</h3>
          <p className="mt-1 text-sm text-gray-500 mb-2">{item?.author}</p>
        </div>
        <p className="text-sm ">
          <span className=" text-gray-900 mr-2 font-medium text-lg">
            {item?.currency}
            {item?.current_price}
          </span>
          <span className="text-gray-500 font-lg line-through text-sm">
            {item?.currency}
            {item?.original_price}
          </span>
          <Discount
            original={item?.original_price}
            current={item?.current_price}
            className="text-medium"
          />
        </p>
      </div>
    </div>
  )
}

export default Card
