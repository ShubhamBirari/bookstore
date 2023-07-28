import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectItem } from '../redux/books'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const BookDetail = () => {
  const { selected } = useSelector((state) => state.reducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const book = selected
  return (
    <>
      <div className="bg-white mx-auto max-w-2xl space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="pt-6 flex items-center-4">
            <li>
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={() => dispatch(selectItem(null))}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  Books
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <span className="font-medium text-gray-500 hover:text-gray-600">
                {book?.name}
              </span>
            </li>
          </ol>
        </nav>
        <div className="flex">
          <div className="pt-16 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
            {/* Image gallery */}
            <div className="hidden overflow-hidden rounded-lg lg:block h-96 w-72">
              <img
                src={book?.url}
                alt="url"
                className="h-full w-full object-center"
              />
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <Button
                label={book.isItemInCart ? 'Go to bag' : 'Add to bag'}
                onClick={() => {
                  book.isItemInCart
                    ? navigate('/checkout')
                    : dispatch(addToCart(selected))
                }}
                className="text-white w-full mt-10 flex border border-transparent px-8 py-3 bg-indigo-600   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              />
            </div>
          </div>
          <div className="">
            {/* book? info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {book?.name}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0 pt-4">
                <h2 className="sr-only">book? information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {book?.current_price}
                </p>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {book?.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{book?.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetail
