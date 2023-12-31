import React from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import Image from './Image'
import { setSearch } from '../redux/books'

const navigation = [{ name: 'Home', href: '/' }]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const { booksList, search } = useSelector((state) => state.reducer)
  const itemsInCart = booksList.filter((temp) => temp.isItemInCart).length
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const showCart = () => {
    return (
      <button
        type="button"
        onClick={() => navigate('/checkout')}
        className="rounded-full notification bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
        {itemsInCart > 0 && <span className="badge">{itemsInCart}</span>}
      </button>
    )
  }

  return (
    <>
      <div className="min-h-full">
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0" onClick={() => navigate('/')}>
                  <Image
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    onClick={() => {
                      dispatch(setSearch(null))
                    }}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => {
                          dispatch(setSearch(null))
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex">
                <div className="ml-4 flex items-center md:ml-6">
                  <Search search={search} />
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  {showCart()}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Search />
                {showCart()}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
