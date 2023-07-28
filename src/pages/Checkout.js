import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectItem } from '../redux/books'
import CheckoutCard from '../components/CheckoutCard'

const Checkout = () => {
  const { booksList } = useSelector((state) => state.reducer)
  const [price, setPrice] = useState(null)
  const [discount, setDiscount] = useState(null)
  const [total, setTotal] = useState(null)
  const [currency, setCurrency] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    let newPrice = 0
    let newTotal = 0
    let totalDiscount = 0

    booksList.forEach((book) => {
      if (book.isItemInCart) {
        newPrice = newPrice + book.quantity * book.original_price
        totalDiscount =
          totalDiscount +
          book.quantity * (book.original_price - book.current_price)
        newTotal =
          newTotal +
          (book.quantity * book.original_price -
            book.quantity * (book.original_price - book.current_price))
      }
    })

    setPrice(newPrice)
    setDiscount(totalDiscount)
    setTotal(newTotal)
    setCurrency(booksList[0].currency)
  }, [booksList])

  return (
    <>
      <div className="bg-slate-100 mx-auto max-w-2xl space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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
                Checkout
              </span>
            </li>
          </ol>
        </nav>

        <div className="flex pt-8">
          <div className="w-3/5  bg-white mr-4">
            <div className="checkout mx-6 my-6">
              {booksList.map(
                (item) =>
                  item.isItemInCart && (
                    <CheckoutCard item={item} key={item.id} />
                  )
              )}
            </div>
          </div>
          <div className="w-2/5 bg-white p-8 h-fit	">
            <div className="">
              <p className="border-b py-1">PRICE DETAILS</p>
              <div className="mt-4">
                <p className="flex justify-between mb-4">
                  <span className="label">
                    Price ({' '}
                    {booksList.filter((temp) => temp.isItemInCart).length} items
                    ){' '}
                  </span>
                  <span>
                    {currency}
                    {price}
                  </span>
                </p>
                <p className="flex justify-between mb-4 pb-4 border-b border-dashed">
                  <span className="label">Discount</span>
                  <span className="text-lime-600">
                    - {currency}
                    {discount}
                  </span>
                </p>
                <p className="flex justify-between font-semibold text-xl">
                  <span className="label">Total</span>
                  <span>
                    {currency}
                    {total}
                  </span>
                </p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
