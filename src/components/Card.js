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
      <div className="w-full flex justify-center lg:h-64 sm:h-64 h-32">
        <Image src={item?.url} alt={item?.name} className="h-full sm:w-full" />
      </div>
      <div className="mt-5 text-left">
        <div>
          <h3 className="text-md text-gray-900 truncate">{item?.name}</h3>
          <p className="mt-1 text-sm text-gray-500 mb-2">{item?.author}</p>
        </div>
        <p className="text-sm ">
          <span className=" text-gray-900 mr-2 font-medium text-lg">
            {item?.currency}
            {item?.current_price}
          </span>
          <span className="text-gray-400 font-lg line-through text-sm">
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
