import { useSelector } from 'react-redux'
import './App.css'
import Card from './components/Card'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'

function App() {
  const { booksList } = useSelector((state) => state.reducer)
  const [pageNo, setPageNo] = useState(0)
  const [list, setList] = useState([])

  const pageCount = Math.ceil(booksList.length / 8)

  useEffect(() => {
    console.log(pageNo, booksList?.slice(pageNo * 8, (pageNo + 1) * 8))
    setList(booksList?.slice(pageNo * 8, (pageNo + 1) * 8))
  }, [pageNo])

  return (
    <div className="App">
      <div className="">
        <div className="mx-auto max-w-2xl px-2 py-8 sm:px-1 sm:py-4 lg:max-w-7xl lg:px-8">
          <div className="mt-6 mb-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {list.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            pageClassName="px-2 rounded mx-2"
            pageLinkClassName=""
            previousClassName={'mr-12 '}
            previousLinkClassName=""
            nextClassName={'mr-12 '}
            nextLinkClassName=" ml-12"
            pageCount={pageCount}
            disabledClassName="opacity-75"
            onPageChange={(e) => {
              setPageNo(e.selected)
            }}
            containerClassName="pagination bg-white flex justify-center p-2 mt-4 font-medium"
            activeClassName="active bg-indigo-600 text-white "
          />
        </div>
      </div>
    </div>
  )
}

export default App
