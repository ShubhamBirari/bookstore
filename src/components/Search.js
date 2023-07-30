import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../redux/books'

const Search = ({ search }) => {
  console.log(search)
  const dispatch = useDispatch()

  return (
    <input
      placeholder="Search"
      className="p-1 rounded px-4"
      value={search ?? ''}
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  )
}
export default Search
